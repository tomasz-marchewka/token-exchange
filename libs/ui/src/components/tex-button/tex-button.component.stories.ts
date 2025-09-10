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
    appearance: 'filled',
    disabled: false,
  },
  render: (args) => ({
    template: `<tex-button appearance=${args.appearance} [disabled]=${args.disabled}>Primary</tex-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    appearance: 'tonal',
    disabled: false,
  },
  render: (args) => ({
    template: `<tex-button appearance=${args.appearance} [disabled]=${args.disabled}>Secondary</tex-button>`,
  }),
};

export const Ghost: Story = {
  args: {
    appearance: 'outlined',
    disabled: false,
  },
  render: (args) => ({
    template: `<tex-button appearance=${args.appearance} [disabled]=${args.disabled}>Ghost</tex-button>`,
  }),
};
