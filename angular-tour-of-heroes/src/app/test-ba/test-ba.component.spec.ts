import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBaComponent } from './test-ba.component';

describe('TestBaComponent', () => {
  let component: TestBaComponent;
  let fixture: ComponentFixture<TestBaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
