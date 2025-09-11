import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { TexButtonComponent } from './tex-button.component';
import { provideUiIcons } from '../../services/icon-registry-service/icon-registry-service';
import { TexIconComponent } from '../tex-icon/tex-icon.component';

const meta: Meta<TexButtonComponent> = {
  component: TexButtonComponent,
  title: 'TexButtonComponent',
  decorators: [
    applicationConfig({
      providers: [provideUiIcons()],
    }),
    moduleMetadata({
      imports: [TexIconComponent],
    }),
  ],
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

export const IconButton: Story = {
  args: {
    appearance: 'outlined',
    disabled: false,
  },
  render: (args) => ({
    template: `<tex-button appearance=${args.appearance} [disabled]=${args.disabled}><tex-icon icon="crypto_icon"></tex-icon>Button</tex-button>`,
  }),
};
