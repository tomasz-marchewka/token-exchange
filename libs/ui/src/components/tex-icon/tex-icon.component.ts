import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TexIcon } from '../../constants/icons';

@Component({
  selector: 'tex-icon',
  imports: [CommonModule, MatIconModule],
  templateUrl: './tex-icon.component.html',
  styleUrl: './tex-icon.component.scss',
})
export class TexIconComponent {
  icon = input.required<TexIcon>();
}
