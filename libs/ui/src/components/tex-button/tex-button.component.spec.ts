import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TexButtonComponent } from './tex-button.component';
import { By } from '@angular/platform-browser';
import { Component, EventEmitter } from '@angular/core';
import { ButtonAppearance } from '../../types/buttons.types';
import { vi } from 'vitest';

@Component({
  template: `
    <tex-button
      [appearance]="appearance"
      [disabled]="disabled"
      [customClass]="customClass"
      (clicked)="onClick()"
    >
      Click me
    </tex-button>
  `,
  imports: [TexButtonComponent],
})
class TestHostComponent {
  appearance: ButtonAppearance = 'filled';
  disabled = false;
  customClass = '';
  clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}

describe('TexButtonComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexButtonComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.properties['disabled']).toBe(true);
  });

  it('should project content', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.textContent).toContain('Click me');
  });

  it('should apply custom css class', () => {
    component.customClass = 'my-custom-class';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.classes['my-custom-class']).toBe(true);
  });

  it('should emit click event when clicked', () => {
    const spy = vi.spyOn(component, 'onClick');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(spy).toHaveBeenCalled();
  });
});
