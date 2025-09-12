import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TexChipsComponent } from './tex-chips.component';
import { MatChipsModule } from '@angular/material/chips';

const meta: Meta<TexChipsComponent> = {
  component: TexChipsComponent,
  title: 'TexChipsComponent',
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule],
    }),
  ],
};
export default meta;

type Story = StoryObj<TexChipsComponent>;

export const Chips: Story = {
  args: {
    chips: [
      { id: 1, name: 'Market' },
      { id: 2, name: 'Limit' },
    ],
    active: 1,
  },
};
