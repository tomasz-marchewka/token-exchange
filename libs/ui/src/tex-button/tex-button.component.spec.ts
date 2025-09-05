
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TexButtonComponent } from './tex-button.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  template: `<tex-button [color]="color" [variant]="variant" [disabled]="disabled">Click me</tex-button>`,
  imports: [TexButtonComponent],
  standalone: true,
})
class TestHostComponent {
  color: ThemePalette;
  variant: 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' = 'basic';
  disabled = false;
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

  it('should have default variant "basic"', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.attributes['mat-button']).toBeDefined();
  });

  it('should apply the correct variant', () => {
    component.variant = 'stroked';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.attributes['mat-stroked-button']).toBeDefined();
  });

  it('should be disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.properties['disabled']).toBe(true);
  });

  it('should apply the correct color', () => {
    component.color = 'primary';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.classes['mat-primary']).toBe(true);
  });

  it('should project content', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.textContent).toContain('Click me');
  });
});
