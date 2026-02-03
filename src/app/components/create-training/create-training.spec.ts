import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTraining } from './create-training';

describe('CreateTraining', () => {
  let component: CreateTraining;
  let fixture: ComponentFixture<CreateTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
