import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonAppearance } from './tex-button.constants';

@Component({
  selector: 'tex-button',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './tex-button.component.html',
  styleUrl: './tex-button.component.scss',
})
export class TexButtonComponent {
  appearance = input.required<ButtonAppearance>();
  disabled = input<boolean>(false);
  customClass = input<string>();
  clicked = output<void>();
}
