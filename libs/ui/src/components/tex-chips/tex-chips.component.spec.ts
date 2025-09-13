import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, output } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TexChipsComponent } from './tex-chips.component';
import { TexChipComponent } from '../tex-chip/tex-chip.component';
import { TexChip } from '../../types/chips.types';
import { vi } from 'vitest';

const MOCK_CHIPS: TexChip[] = [
  { id: 1, name: 'Chip 1' },
  { id: 2, name: 'Chip 2' },
  { id: 3, name: 'Chip 3' },
];

@Component({
  imports: [TexChipsComponent],
  template: `
    <tex-chips
      [chips]="chips"
      [active]="activeChipId"
      (clicked)="onChipClicked($event)"
    ></tex-chips>
  `,
})
class TestHostComponent {
  chips = MOCK_CHIPS;
  activeChipId = 1;
  clicked = output<number>();

  onChipClicked(id: number) {
    this.clicked.emit(id);
  }
}

describe('TexChipsComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const chipsComponent = fixture.debugElement.query(
      By.directive(TexChipsComponent)
    );
    expect(chipsComponent).toBeTruthy();
  });

  it('should render the correct number of chips', () => {
    const chipElements = fixture.debugElement.queryAll(
      By.directive(TexChipComponent)
    );
    expect(chipElements.length).toBe(MOCK_CHIPS.length);
  });

  it('should set the correct chip as active', () => {
    const chipComponents = fixture.debugElement
      .queryAll(By.directive(TexChipComponent))
      .map((el) => el.componentInstance as TexChipComponent);

    expect(chipComponents[0].active()).toBe(true);
    expect(chipComponents[1].active()).toBe(false);
    expect(chipComponents[2].active()).toBe(false);

    testHost.activeChipId = 3;
    fixture.detectChanges();

    expect(chipComponents[0].active()).toBe(false);
    expect(chipComponents[1].active()).toBe(false);
    expect(chipComponents[2].active()).toBe(true);
  });

  it('should emit the correct chip id when a chip is clicked', () => {
    const spy = vi.spyOn(testHost, 'onChipClicked');

    const chipElements = fixture.debugElement.queryAll(
      By.directive(TexChipComponent)
    );

    const secondChipElement = chipElements[1].nativeElement;
    secondChipElement.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledOnce();
    expect(spy).toHaveBeenCalledWith(2);
  });
});
