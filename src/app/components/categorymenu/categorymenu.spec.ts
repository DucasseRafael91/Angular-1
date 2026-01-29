import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorymenu } from './categorymenu';

describe('Categorymenu', () => {
  let component: Categorymenu;
  let fixture: ComponentFixture<Categorymenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorymenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorymenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
