import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalcComponent } from './intervalc.component';

describe('IntervalcComponent', () => {
  let component: IntervalcComponent;
  let fixture: ComponentFixture<IntervalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
