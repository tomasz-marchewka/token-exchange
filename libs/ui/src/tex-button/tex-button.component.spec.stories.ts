import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { ThemePalette } from '@angular/material/core';

export class TestHostComponent {
  color: ThemePalette;
  variant:
    | 'basic'
    | 'raised'
    | 'stroked'
    | 'flat'
    | 'icon'
    | 'fab'
    | 'mini-fab' = 'basic';
  disabled = false;
}

const meta: Meta<TestHostComponent> = {
  component: TestHostComponent,
  title: 'TestHostComponent',
};
export default meta;

type Story = StoryObj<TestHostComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/tex-button.spec/gi)).toBeTruthy();
  },
};
