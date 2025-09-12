import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonAppearance } from '../../types/buttons.types';

@Component({
  selector: 'tex-button',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './tex-button.component.html',
  styleUrl: './tex-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TexButtonComponent {
  appearance = input.required<ButtonAppearance>();
  disabled = input<boolean>(false);
  customClass = input<string>();
  clicked = output<MouseEvent>();
}
