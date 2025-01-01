import type { Meta, StoryObj } from '@storybook/react';

import SignOutButton from './SignOutButton';

const meta = {
  component: SignOutButton,
} satisfies Meta<typeof SignOutButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};