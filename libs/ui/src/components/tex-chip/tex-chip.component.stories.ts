import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TexChipComponent } from './tex-chip.component';
import { MatChipsModule } from '@angular/material/chips';

const meta: Meta<TexChipComponent> = {
  component: TexChipComponent,
  title: 'TexChipComponent',
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule],
    }),
  ],
};
export default meta;

type Story = StoryObj<TexChipComponent>;

export const Active: Story = {
  args: {
    active: true,
  },
  render: (args) => ({
    template: `<tex-chip active=${args.active}>Active</tex-chip>`,
  }),
};

export const Inactive: Story = {
  args: {
    active: false,
  },
  render: (args) => ({
    template: `<tex-chip active=${args.active}>Inactive</tex-chip>`,
  }),
};
