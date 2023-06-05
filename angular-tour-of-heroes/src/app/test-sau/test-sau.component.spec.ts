import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSauComponent } from './test-sau.component';

describe('TestSauComponent', () => {
  let component: TestSauComponent;
  let fixture: ComponentFixture<TestSauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
