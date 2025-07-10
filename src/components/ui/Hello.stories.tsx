import { Hello } from './Hello';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Hello> = {
  component: Hello,
  title: 'UI/Hello',
};
export default meta;

type Story = StoryObj<typeof Hello>;

export const Default: Story = {};
