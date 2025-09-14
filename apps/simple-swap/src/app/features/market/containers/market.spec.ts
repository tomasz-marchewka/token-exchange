import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import Market from './market';

describe('Market', () => {
  let component: Market;
  let fixture: ComponentFixture<Market>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Market],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(Market);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
