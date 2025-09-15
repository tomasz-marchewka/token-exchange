import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TexDialogComponent } from './tex-dialog.component';

@Component({
  standalone: true,
  imports: [CommonModule, TexDialogComponent],
  template: ` <tex-dialog>Dialog</tex-dialog> `,
})
class TestHostComponent {}

describe('TexDialogComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const select = fixture.debugElement.query(By.directive(TexDialogComponent));
    expect(select).toBeTruthy();
  });
});
