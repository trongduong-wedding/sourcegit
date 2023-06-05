import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNamComponent } from './test-nam.component';

describe('TestNamComponent', () => {
  let component: TestNamComponent;
  let fixture: ComponentFixture<TestNamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
