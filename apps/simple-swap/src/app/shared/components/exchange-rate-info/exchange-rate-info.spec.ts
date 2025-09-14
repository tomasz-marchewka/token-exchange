import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExchangeRateInfo } from './exchange-rate-info';
import { inputBinding } from '@angular/core';

describe('ExchangeRateInfo', () => {
  let component: ExchangeRateInfo;
  let fixture: ComponentFixture<ExchangeRateInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeRateInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(ExchangeRateInfo, {
      bindings: [
        inputBinding('baseCurrency', () => 'ETH'),
        inputBinding('targetCurrency', () => 'BTC'),
        inputBinding('rate', () => 0.2137),
        inputBinding('rateToUsd', () => 3762),
      ],
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
