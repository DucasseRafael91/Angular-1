import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingModal } from './training-modal';

describe('TrainingModal', () => {
  let component: TrainingModal;
  let fixture: ComponentFixture<TrainingModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
