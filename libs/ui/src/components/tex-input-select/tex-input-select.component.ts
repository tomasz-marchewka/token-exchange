import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TexSelectComponent } from '../tex-select/tex-select.component';
import { SelectItem } from '../../types/select.types';

@Component({
  selector: 'tex-input',
  imports: [CommonModule, FormsModule, MatInputModule, TexSelectComponent],
  templateUrl: './tex-input-select.component.html',
  styleUrl: './tex-input-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TexInputSelectComponent {
  label = input.required<string>();
  type = input<string>('number');
  readonly = input<boolean>(false);
  placeholder = input<string>('');
  value = model<number>();

  selectLabel = input.required<string>();
  selectedValue = model<SelectItem | undefined>();
  selectItems = input.required<SelectItem[]>();

  setValue(newValue: number) {
    this.value.set(newValue);
  }

  setSelectValue(item: SelectItem | undefined) {
    this.selectedValue.set(item);
  }
}
