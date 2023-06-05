import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBonComponent } from './test-bon.component';

describe('TestBonComponent', () => {
  let component: TestBonComponent;
  let fixture: ComponentFixture<TestBonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
