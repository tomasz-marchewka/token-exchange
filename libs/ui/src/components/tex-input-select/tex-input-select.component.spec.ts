import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TexInputSelectComponent } from './tex-input-select.component';
import { SelectItem } from '../../types/select.types';
import { TexSelectComponent } from '../tex-select/tex-select.component';
import { provideUiIcons } from '../../services/icon-registry-service/icon-registry-service';

const MOCK_ITEMS: SelectItem[] = [
  { id: 1, name: 'Bitcoin', description: 'BTC' },
  { id: 2, name: 'Ethereum', description: 'ETH' },
];

@Component({
  standalone: true,
  imports: [TexInputSelectComponent],
  template: `
    <tex-select-input
      [label]="'Amount'"
      [placeholder]="'0.0'"
      [(value)]="inputValue"
      [selectLabel]="'Crypto'"
      [selectItems]="selectItems"
      [(selectedValue)]="selectValue"
    ></tex-select-input>
  `,
})
class TestHostComponent {
  inputValue: number | undefined = 1.23;
  selectItems = MOCK_ITEMS;
  selectValue: SelectItem | undefined = MOCK_ITEMS[0];
}

describe('TexInputSelectComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;
  let inputElement: HTMLInputElement;
  let texSelect: TexSelectComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        HttpClientTestingModule,
        NoopAnimationsModule,
      ],
      providers: [provideUiIcons()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();

    inputElement = fixture.debugElement.query(
      By.css('input[matInput]')
    ).nativeElement;
    texSelect = fixture.debugElement.query(
      By.directive(TexSelectComponent)
    ).componentInstance;
  });

  it('should create the component', () => {
    const component = fixture.debugElement.query(
      By.directive(TexInputSelectComponent)
    );
    expect(component).toBeTruthy();
  });

  it('should bind the select value correctly', () => {
    expect(texSelect.selectedValue()).toBe(MOCK_ITEMS[0]);

    testHost.selectValue = MOCK_ITEMS[1];
    fixture.detectChanges();

    expect(texSelect.selectedValue()).toBe(MOCK_ITEMS[1]);
  });

  it('should update host value when select value changes internally', async () => {
    const selectTrigger = fixture.debugElement.query(
      By.css('tex-select button')
    ).nativeElement;
    selectTrigger.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const menuItems = document.querySelectorAll('.select-wrapper__button');
    const secondItem = menuItems[1] as HTMLElement;
    secondItem.click();
    fixture.detectChanges();

    expect(testHost.selectValue).toBe(MOCK_ITEMS[1]);
  });
});
