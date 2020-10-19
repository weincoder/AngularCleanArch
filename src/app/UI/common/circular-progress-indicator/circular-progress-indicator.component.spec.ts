import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularProgressIndicatorComponent } from './circular-progress-indicator.component';

describe('CircularProgressIndicatorComponent', () => {
  let component: CircularProgressIndicatorComponent;
  let fixture: ComponentFixture<CircularProgressIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularProgressIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
