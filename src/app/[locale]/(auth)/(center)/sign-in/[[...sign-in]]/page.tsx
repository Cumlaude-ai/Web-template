import { getTranslations } from 'next-intl/server';
import Image from "next/image"
import { getProviders } from "@/utils/Helpers"

// Component imports
import SignInButton from '@/components/buttons/SignInButton'


export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const t = await getTranslations({
    locale: (await props.params).locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

async function SignInPage(props: { params: Promise<{ locale: string }> }) {
  const t = await getTranslations({
    locale: (await props.params).locale,
    namespace: 'SignIn',
  });
  const providers: ReturnType<typeof getProviders> = (await getProviders()) || {};

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">{t('meta_title')}</h1>
            <p className="text-balance text-muted-foreground">
              {t('meta_description')}
            </p>
          </div>

          {Object.values(providers).map(
            (provider) => provider.id !== "hasura-credentials" && (
              <SignInButton auth={provider} key={provider.id} />
            )
          )}
        </div>
      </div>
      <div className="hidden bg-black lg:block max-h-screen">
        <Image
          src="/assets/images/placeholder.webp"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
};

export default SignInPage;
