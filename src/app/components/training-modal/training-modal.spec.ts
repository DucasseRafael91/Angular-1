import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingModalComponent } from './training-modal';

describe('TrainingModalComponent', () => {
  let component: TrainingModalComponent;
  let fixture: ComponentFixture<TrainingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
