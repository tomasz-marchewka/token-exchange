import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { TexInputSelectComponent } from './tex-input-select.component';
import { provideUiIcons } from '../../services/icon-registry-service/icon-registry-service';

const meta: Meta<TexInputSelectComponent> = {
  component: TexInputSelectComponent,
  title: 'TexInputSelectComponent',
  decorators: [
    moduleMetadata({
      imports: [TexInputSelectComponent],
    }),
    applicationConfig({
      providers: [provideUiIcons()],
    }),
  ],
};
export default meta;

type Story = StoryObj<TexInputSelectComponent>;

export const Sell: Story = {
  args: {
    label: 'Sell',
    value: 0,
    selectLabel: 'Select token',
    selectItems: [
      { id: 1, name: 'ADA', description: 'Cardano' },
      { id: 2, name: 'BTC', description: 'Bitcoin' },
    ],
  },
};
