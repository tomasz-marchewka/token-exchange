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
import { TexIconComponent } from '../tex-icon/tex-icon.component';

@Component({
  selector: 'tex-select-input',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    TexSelectComponent,
    TexIconComponent,
  ],
  templateUrl: './tex-input-select.component.html',
  styleUrl: './tex-input-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TexInputSelectComponent {
  label = input.required<string>();
  disabled = input<boolean>(false);
  type = input<string>('number');
  readonly = input<boolean>(false);
  placeholder = input<string>('');
  value = model<number>();

  selectLabel = input<string>('Select value');
  selectedValue = model<SelectItem>();
  selectItems = input.required<SelectItem[]>();
  readonlySelect = input<boolean>(false);

  setValue(newValue: string) {
    const value = parseInt(newValue);

    this.value.set(!isNaN(value) ? value : 0);
  }

  setSelectValue(item: SelectItem | undefined) {
    this.selectedValue.set(item);
  }
}
