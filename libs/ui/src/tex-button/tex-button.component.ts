import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';

type ButtonVariant =
  | 'basic'
  | 'raised'
  | 'stroked'
  | 'flat'
  | 'icon'
  | 'fab'
  | 'mini-fab';

@Component({
  selector: 'tex-button',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './tex-button.component.html',
  styleUrls: ['./tex-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TexButtonComponent {
  @Input() color: ThemePalette;
  @Input() variant: ButtonVariant = 'raised';
  @Input() disabled = false;
}
