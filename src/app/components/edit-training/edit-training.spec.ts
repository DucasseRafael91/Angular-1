import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTraining } from './edit-training';

describe('EditTraining', () => {
  let component: EditTraining;
  let fixture: ComponentFixture<EditTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
