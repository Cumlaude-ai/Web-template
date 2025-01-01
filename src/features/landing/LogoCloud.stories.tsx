import type { Meta, StoryObj } from '@storybook/react';

import { LogoCloud } from './LogoCloud';

const meta = {
  component: LogoCloud,
} satisfies Meta<typeof LogoCloud>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Cumlaude.ai",
    children: null
  }
};