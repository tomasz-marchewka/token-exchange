import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TexButtonComponent,
  TexIconComponent,
  TexInputSelectComponent,
} from 'ui';
import { ExchangeRateInfo } from '../../../shared/components/exchange-rate-info/exchange-rate-info';

@Component({
  selector: 'ss-limit',
  imports: [
    TexInputSelectComponent,
    TexIconComponent,
    TexButtonComponent,
    ExchangeRateInfo,
  ],
  templateUrl: './limit.html',
  styleUrl: './limit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LimitComponent {}
