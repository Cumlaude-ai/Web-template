
import MyMsalProvider from '@/msal/MyMsalProvider'
import { getProviders } from "@/utils/Helpers"

export default async function AuthLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const providers: ReturnType<typeof getProviders> = (await getProviders()) || {};
  console.log(providers)
  return (
    <MyMsalProvider
      // PRO: Dark mode support for Clerk
      providers={providers}
      // localization={clerkLocale}
      // signInUrl={signInUrl}
      // signUpUrl={signUpUrl}
      // signInFallbackRedirectUrl={dashboardUrl}
      // signUpFallbackRedirectUrl={dashboardUrl}
      // afterSignOutUrl={afterSignOutUrl}
    >
      {props.children}
    </MyMsalProvider>
  );
}
