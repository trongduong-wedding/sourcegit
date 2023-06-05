import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMotComponent } from './test-mot.component';

describe('TestMotComponent', () => {
  let component: TestMotComponent;
  let fixture: ComponentFixture<TestMotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
