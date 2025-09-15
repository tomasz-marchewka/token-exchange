import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { SelectItem, TexIconComponent, TexInputSelectComponent } from 'ui';
import { Token } from '../../types/tokens.types';

@Component({
  selector: 'ss-exchange-inputs',
  imports: [TexInputSelectComponent, TexIconComponent],
  templateUrl: './exchange-inputs.html',
  styleUrl: './exchange-inputs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeInputsComponent {
  tokens = input.required<Token[]>();
  sellAmount = input.required<number>();
  buyAmount = input.required<number>();
  sellToken = input<Token>();
  buyToken = input<Token>();

  sellTokenChange = output<Token>();
  buyTokenChange = output<Token>();
  sellAmountChange = output<number>();
  swapTokensChange = output<void>();

  setSelectedBuyToken(token: SelectItem | undefined) {
    this.buyTokenChange.emit(token as Token);
  }
  setSelectedSellToken(token: SelectItem | undefined) {
    this.sellTokenChange.emit(token as Token);
  }
  setSellAmount(amount: number | undefined) {
    if (typeof amount === 'number') {
      this.sellAmountChange.emit(amount);
    }
  }

  swapTokens() {
    this.swapTokensChange.emit();
  }
}
