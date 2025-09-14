import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { TexSelectComponent } from './tex-select.component';
import { provideUiIcons } from '../../services/icon-registry-service/icon-registry-service';

const meta: Meta<TexSelectComponent> = {
  component: TexSelectComponent,
  title: 'TexSelectComponent',
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    applicationConfig({
      providers: [provideUiIcons()],
    }),
  ],
};
export default meta;

type Story = StoryObj<TexSelectComponent>;

export const Select: Story = {
  args: {
    selectLabel: 'Select token',
    selectItems: [
      { id: 1, name: 'ADA', description: 'Cardano', icon: 'crypto_icon' },
      { id: 2, name: 'BTC', description: 'Bitcoin', icon: 'crypto_icon' },
      { id: 3, name: 'ETH', description: 'Ethereum', icon: 'ethereum' },
    ],
  },
};
