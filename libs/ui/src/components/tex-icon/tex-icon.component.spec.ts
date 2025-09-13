import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TexIconComponent } from './tex-icon.component';
import { provideUiIcons } from '../../services/icon-registry-service/icon-registry-service';
import { TexIcon } from '../../types/icons.types';

@Component({
  standalone: true,
  imports: [TexIconComponent],
  template: `<tex-icon [icon]="testIcon"></tex-icon>`,
})
class TexIconTestHostComponent {
  testIcon: TexIcon = 'crypto_icon';
}

describe('TexIconComponent', () => {
  let fixture: ComponentFixture<TexIconTestHostComponent>;
  let testHost: TexIconTestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexIconTestHostComponent],
      providers: [provideUiIcons()],
    }).compileComponents();

    fixture = TestBed.createComponent(TexIconTestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const iconComponent = fixture.debugElement.query(
      By.directive(TexIconComponent)
    );
    expect(iconComponent).toBeTruthy();
  });

  it('should render mat-icon with the correct svgIcon name', () => {
    let matIcon = fixture.debugElement.query(By.css('mat-icon')).nativeElement;
    expect(matIcon.getAttribute('data-mat-icon-name')).toBe('crypto_icon');

    testHost.testIcon = 'keyboard_arrow_down';
    fixture.detectChanges();

    matIcon = fixture.debugElement.query(By.css('mat-icon')).nativeElement;
    expect(matIcon.getAttribute('data-mat-icon-name')).toBe(
      'keyboard_arrow_down'
    );
  });
});
