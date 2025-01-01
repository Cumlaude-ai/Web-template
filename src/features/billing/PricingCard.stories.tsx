import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import { PricingCard } from './PricingCard';

const meta = {
  component: PricingCard,
  decorators: [
    () => (
      <NextIntlClientProvider locale={"en"} messages={{}}>
        <PricingCard planId='test' price={10} interval='month' button={<button>Subscribe</button>}>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </PricingCard>
      </NextIntlClientProvider>
    ),
  ],
} as Meta<typeof PricingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};