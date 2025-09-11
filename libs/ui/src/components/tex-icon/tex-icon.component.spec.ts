import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { TexIconComponent } from './tex-icon.component';
import { TexIcon } from '../../constants/icons';
import { provideUiIcons } from '../../services/icon-registry-service/icon-registry-service';

// Test Host Component
@Component({
  template: `<tex-icon [icon]="testIcon"></tex-icon>`,
  imports: [TexIconComponent],
})
class TestHostComponent {
  testIcon: TexIcon = 'crypto_icon';
}

describe('TexIconComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, TexIconComponent, MatIconModule],
      providers: [provideUiIcons()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const iconComponent = fixture.debugElement.query(
      By.directive(TexIconComponent)
    );
    expect(iconComponent).toBeTruthy();
  });

  it('should render mat-icon with the correct svgIcon input', () => {
    // Check initial icon
    let matIcon = fixture.debugElement.query(By.css('mat-icon')).nativeElement;
    expect(matIcon.getAttribute('data-mat-icon-name')).toBe('crypto_icon');

    // Change the icon and verify again
    testHost.testIcon = 'keyboard_arrow_down';
    fixture.detectChanges();

    matIcon = fixture.debugElement.query(By.css('mat-icon')).nativeElement;
    expect(matIcon.getAttribute('data-mat-icon-name')).toBe(
      'keyboard_arrow_down'
    );
  });
});
