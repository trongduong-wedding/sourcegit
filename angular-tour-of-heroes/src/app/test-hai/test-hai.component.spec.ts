import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHaiComponent } from './test-hai.component';

describe('TestHaiComponent', () => {
  let component: TestHaiComponent;
  let fixture: ComponentFixture<TestHaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
