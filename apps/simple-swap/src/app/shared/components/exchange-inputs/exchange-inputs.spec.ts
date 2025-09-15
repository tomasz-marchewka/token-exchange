import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExchangeInputsComponent } from './exchange-inputs';
import { inputBinding } from '@angular/core';

describe('ExchangeInputsComponent', () => {
  let component: ExchangeInputsComponent;
  let fixture: ComponentFixture<ExchangeInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeInputsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExchangeInputsComponent, {
      bindings: [
        inputBinding('tokens', () => []),
        inputBinding('sellAmount', () => 1),
        inputBinding('buyAmount', () => 2),
      ],
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
