import type { Meta, StoryObj } from '@storybook/angular';
import { TexButtonComponent } from './tex-button.component';
import { expect } from 'storybook/test';

const meta: Meta<TexButtonComponent> = {
  component: TexButtonComponent,
  title: 'TexButtonComponent',
};
export default meta;

type Story = StoryObj<TexButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'raised',
    disabled: false,
  },
};

export const Heading: Story = {
  args: {
    variant: 'raised',
    disabled: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/tex-button/gi)).toBeTruthy();
  },
};
