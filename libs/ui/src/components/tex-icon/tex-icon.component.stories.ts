import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { TexIconComponent } from './tex-icon.component';
import { provideUiIcons } from '../../services/icon-registry-service/icon-registry-service';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<TexIconComponent> = {
  component: TexIconComponent,
  title: 'TexIconComponent',
  decorators: [
    applicationConfig({
      providers: [provideUiIcons()],
    }),
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
};
export default meta;

type Story = StoryObj<TexIconComponent>;

export const CryptoIcon: Story = {
  args: {
    icon: 'crypto_icon',
  },
};

export const ArrowDownIcon: Story = {
  args: {
    icon: 'keyboard_arrow_down',
  },
};
