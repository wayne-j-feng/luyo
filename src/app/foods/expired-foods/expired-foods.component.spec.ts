import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredFoodsComponent } from './expired-foods.component';

describe('ExpiredFoodsComponent', () => {
  let component: ExpiredFoodsComponent;
  let fixture: ComponentFixture<ExpiredFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
