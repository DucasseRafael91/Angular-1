import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMenuComponent } from './categorymenu';

describe('CategoryMenuComponent', () => {
  let component: CategoryMenuComponent;
  let fixture: ComponentFixture<CategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryMenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
