import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { TexChip } from '../../types/chips.types';
import { TexChipComponent } from '../tex-chip/tex-chip.component';

@Component({
  selector: 'tex-chips',
  imports: [CommonModule, TexChipComponent, MatChipsModule],
  templateUrl: './tex-chips.component.html',
  styleUrl: './tex-chips.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TexChipsComponent {
  chips = input.required<TexChip[]>();
  active = input.required<number>();
  ariaLabel = input('');

  clicked = output<number>();
}
