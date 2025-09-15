import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TexButtonComponent, TexInputSelectComponent } from 'ui';
import { ExchangeInputsComponent } from '../../../shared/components/exchange-inputs/exchange-inputs';

@Component({
  selector: 'ss-limit',
  imports: [
    TexInputSelectComponent,
    TexButtonComponent,
    ExchangeInputsComponent,
  ],
  templateUrl: './limit.html',
  styleUrl: './limit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LimitComponent {}
