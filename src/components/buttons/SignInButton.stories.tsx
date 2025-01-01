import type { Meta, StoryObj } from '@storybook/react';

import SignInButton from './SignInButton';

const meta = {
  component: SignInButton,
} satisfies Meta<typeof SignInButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};