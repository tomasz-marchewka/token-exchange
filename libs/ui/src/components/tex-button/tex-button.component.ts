import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonAppearance } from './tex-button.constants';

@Component({
  selector: 'tex-button',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './tex-button.component.html',
  styleUrl: './tex-button.component.scss',
})
export class TexButtonComponent {
  @Input() disabled = false;
  @Input() appearance: ButtonAppearance = 'filled';
  @Input() customClass: string;
  @Output() clicked = new EventEmitter<void>();
}
