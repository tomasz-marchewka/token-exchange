import { CurrencyPipe, DecimalPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { CurrencyExchangeService } from '../../services/currency-exchange/currency-exchange-service';

@Component({
  selector: 'ss-exchange-rate-info',
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './exchange-rate-info.html',
  styleUrl: './exchange-rate-info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRateInfo {
  baseCurrency = input.required<string>();
  targetCurrency = input.required<string>();
  rate = input.required<number>();
  rateToUsd = input.required<number>();

  protected targetValue = computed(() =>
    this.exchangeService.exchangeCurrency(1, this.rate())
  );
  protected usdValue = computed(() =>
    this.exchangeService.exchangeCurrency(1, this.rateToUsd())
  );

  private exchangeService = inject(CurrencyExchangeService);
}
