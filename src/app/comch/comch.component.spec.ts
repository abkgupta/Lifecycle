import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComchComponent } from './comch.component';

describe('ComchComponent', () => {
  let component: ComchComponent;
  let fixture: ComponentFixture<ComchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
