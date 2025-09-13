import '@angular/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TexSelectComponent } from './tex-select.component';
import { SelectItem } from '../../types/select.types';
import { TexButtonComponent } from '../tex-button/tex-button.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideUiIcons } from '../../services/icon-registry-service/icon-registry-service';
import { CommonModule } from '@angular/common';

const MOCK_ITEMS: SelectItem[] = [
  { id: 1, name: 'Bitcoin', description: 'BTC' },
  { id: 2, name: 'Ethereum', description: 'ETH' },
];

@Component({
  standalone: true,
  imports: [CommonModule, TexSelectComponent],
  template: `
    <tex-select
      [selectLabel]="label"
      [selectItems]="items"
      [(selectedValue)]="selection"
    ></tex-select>
  `,
})
class TestHostComponent {
  label = 'Choose Crypto';
  items = MOCK_ITEMS;
  selection: SelectItem | undefined = undefined;
}

describe('TexSelectComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;
  let trigger: HTMLElement;

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
    const triggerDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(TexButtonComponent)
    );
    trigger = triggerDebugElement.nativeElement;
  });

  it('should create the component', () => {
    const select = fixture.debugElement.query(By.directive(TexSelectComponent));
    expect(select).toBeTruthy();
  });

  it('should display the label when no value is selected', () => {
    expect(trigger.textContent).toContain('Choose Crypto');
  });

  it('should open the menu on trigger click', async () => {
    trigger.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const menuItems = document.querySelectorAll('.select-wrapper__button');
    expect(menuItems.length).toBe(MOCK_ITEMS.length);
    expect(menuItems[0].textContent).toContain('Bitcoin');
    expect(menuItems[1].textContent).toContain('Ethereum');
  });

  it('should update the selected value and button text on item click', async () => {
    trigger.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const menuItem = document.querySelector(
      '.select-wrapper__button'
    ) as HTMLElement;
    menuItem.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(testHost.selection).toBe(MOCK_ITEMS[0]);
    expect(trigger.textContent).toContain('Bitcoin');
  });

  it('should change button appearance when a value is selected', () => {
    const button = fixture.debugElement.query(By.directive(TexButtonComponent));
    const buttonInstance = button.componentInstance as TexButtonComponent;

    expect(buttonInstance.appearance()).toBe('filled');

    testHost.selection = MOCK_ITEMS[1];
    fixture.detectChanges();

    expect(buttonInstance.appearance()).toBe('outlined');
  });
});
