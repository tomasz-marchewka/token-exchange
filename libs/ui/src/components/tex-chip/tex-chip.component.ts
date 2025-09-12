import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'tex-chip, [tex-chip]',
  imports: [CommonModule, MatChipsModule],
  templateUrl: './tex-chip.component.html',
  styleUrl: './tex-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TexChipComponent {
  active = input.required<boolean>();
}
