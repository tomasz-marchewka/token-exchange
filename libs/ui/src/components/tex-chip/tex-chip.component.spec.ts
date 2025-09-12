import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatChip } from '@angular/material/chips';
import { TexChipComponent } from './tex-chip.component';

@Component({
  standalone: true,
  imports: [TexChipComponent],
  template: `<tex-chip [active]="isActive">My Chip</tex-chip>`,
})
class TexChipTestHostComponent {
  isActive = false;
}

describe('TexChipComponent', () => {
  let fixture: ComponentFixture<TexChipTestHostComponent>;
  let testHost: TexChipTestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexChipTestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TexChipTestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const texChipComponent = fixture.debugElement.query(
      By.directive(TexChipComponent)
    );
    expect(texChipComponent).toBeTruthy();
  });

  it('should project content into the chip', () => {
    const chipElement = fixture.debugElement.query(
      By.directive(MatChip)
    ).nativeElement;
    expect(chipElement.textContent).toContain('My Chip');
  });

  it('should not be highlighted by default', () => {
    const chipInstance = fixture.debugElement.query(
      By.directive(MatChip)
    ).componentInstance;
    expect(chipInstance.highlighted).toBe(false);
  });

  it('should be highlighted when active input is true', () => {
    testHost.isActive = true;
    fixture.detectChanges();
    const chipInstance = fixture.debugElement.query(
      By.directive(MatChip)
    ).componentInstance;
    expect(chipInstance.highlighted).toBe(true);
  });

  it('should lose highlight when active input changes back to false', () => {
    testHost.isActive = true;
    fixture.detectChanges();
    let chipInstance = fixture.debugElement.query(
      By.directive(MatChip)
    ).componentInstance;
    expect(chipInstance.highlighted).toBe(true);

    testHost.isActive = false;
    fixture.detectChanges();
    chipInstance = fixture.debugElement.query(
      By.directive(MatChip)
    ).componentInstance;
    expect(chipInstance.highlighted).toBe(false);
  });
});
