import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { match } from "@formatjs/intl-localematcher";
import { decrypt } from "@/msal/session";
import createMiddleware from 'next-intl/middleware';

import { AllLocales, AppConfig } from '@/utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

const locales = ["en-US", "nl-NL", "nl"];
const defaultLocale = "en-US";

const protectedRoutes = [
  "/dashboard",
];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: any) {
  try {
    request.cookies.set("locale", "nl-NL", {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });

    const browserLanguage = request.cookies.has("locale")
      ? [request.cookies.get("locale").value as string]
      : [defaultLocale];

    return match(browserLanguage, locales, defaultLocale);
  } catch (error: any) {
    console.error("Error getting locale:", error.message);
    console.error("Error stack trace:", error.stack);
    return defaultLocale;
  }
}

export async function middleware(req: NextRequest) {
  try {
    const path = req.nextUrl.pathname;

    // 1. Get the preferred locale
    const pathnameHasLocale = locales.some(
      (locale) => path.startsWith(`/${locale}/`) || path === `/${locale}`,
    );
    const locale = getLocale(req);


    // 2. Check if the route is protected or public
    const isProtectedRoute = protectedRoutes.includes(path);

    // 3. Decrypt the session from the cookie
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    // 4. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !session?.userId) {
      return NextResponse.redirect(new URL(`/${locale}/login`, req.nextUrl));
    }

    // 5. Redirect to /dashboard if the user is authenticated
    if (
      path === `/${locale}/login` &&
      session?.userId &&
      !req.nextUrl.pathname.startsWith(`/${locale}/dashboard`)
    ) {
      return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.nextUrl));
    }

    // 6. Add localization if not included
    if (!pathnameHasLocale) {
      return intlMiddleware(req);
    }
    return NextResponse.next()
  }
  catch (error) {
    console.error(error)
    return NextResponse.error()
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|models|scripts|favicon.ico|icons).*)",
  ],
};