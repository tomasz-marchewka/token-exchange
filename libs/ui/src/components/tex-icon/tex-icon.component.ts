import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TexIcon } from '../../types/icons.types';

@Component({
  selector: 'tex-icon',
  imports: [CommonModule, MatIconModule],
  templateUrl: './tex-icon.component.html',
  styleUrl: './tex-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TexIconComponent {
  icon = input.required<TexIcon>();
}
