import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { TexDialogComponent } from './tex-dialog.component';
import { provideUiIcons } from '../../services/icon-registry-service/icon-registry-service';
import { TexButtonComponent } from '../tex-button/tex-button.component';

const meta: Meta<TexDialogComponent> = {
  component: TexDialogComponent,
  title: 'TexDialogComponent',
  decorators: [
    moduleMetadata({
      imports: [TexButtonComponent],
    }),
    applicationConfig({
      providers: [provideUiIcons()],
    }),
  ],
};
export default meta;

type Story = StoryObj<TexDialogComponent>;

export const Dialog: Story = {
  render: () => ({
    template: `<tex-dialog>Dialog</tex-dialog>`,
  }),
};
