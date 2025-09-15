import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { TexButtonComponent } from '../tex-button/tex-button.component';
import { ButtonAppearance } from '../../types/buttons.types';
import { TexIconComponent } from '../tex-icon/tex-icon.component';
import { SelectItem } from '../../types/select.types';

@Component({
  selector: 'tex-select',
  imports: [CommonModule, MatMenuModule, TexButtonComponent, TexIconComponent],
  templateUrl: './tex-select.component.html',
  styleUrl: './tex-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TexSelectComponent {
  selectLabel = input.required<string>();
  selectItems = input.required<SelectItem[]>();
  selectedValue = model<SelectItem>();

  appearance = computed<ButtonAppearance>(() =>
    this.selectedValue() ? 'outlined' : 'filled'
  );

  onValueSelected(item: SelectItem) {
    this.selectedValue.set(item);
  }
}
