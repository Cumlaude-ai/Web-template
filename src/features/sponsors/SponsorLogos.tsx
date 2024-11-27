/* eslint-disable react-dom/no-unsafe-target-blank */
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { LogoCloud } from '@/features/landing/LogoCloud';

export const SponsorLogos = () => {
  const t= useTranslations("Sponsors");
  return (
  <LogoCloud text={t("title")}>
    <a
      href="https://cumlaude.ai"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/CumlaudeAI-logo-dark.png"
        alt="Clerk logo dark"
        className="dark:hidden"
        width="128"
        height="37"
      />
      <Image
        src="/assets/images/CumlaudeAI-logo.png"
        alt="Clerk logo light"
        className="hidden dark:block"
        width="128"
        height="37"
      />
    </a>

    <a
      href="https://cumlaude.ai"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/CumlaudeAI-logo-dark.png"
        alt="Clerk logo dark"
        className="dark:hidden"
        width="128"
        height="37"
      />
      <Image
        src="/assets/images/CumlaudeAI-logo.png"
        alt="Clerk logo light"
        className="hidden dark:block"
        width="128"
        height="37"
      />
    </a>

    <a
      href="https://cumlaude.ai"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/CumlaudeAI-logo-dark.png"
        alt="Clerk logo dark"
        className="dark:hidden"
        width="128"
        height="37"
      />
      <Image
        src="/assets/images/CumlaudeAI-logo.png"
        alt="Clerk logo light"
        className="hidden dark:block"
        width="128"
        height="37"
      />
    </a>

    <a
      href="https://cumlaude.ai"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/CumlaudeAI-logo-dark.png"
        alt="Clerk logo dark"
        className="dark:hidden"
        width="128"
        height="37"
      />
      <Image
        src="/assets/images/CumlaudeAI-logo.png"
        alt="Clerk logo light"
        className="hidden dark:block"
        width="128"
        height="37"
      />
    </a>
  </LogoCloud>
)};
