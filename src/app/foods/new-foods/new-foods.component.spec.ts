import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFoodsComponent } from './new-foods.component';

describe('NewFoodsComponent', () => {
  let component: NewFoodsComponent;
  let fixture: ComponentFixture<NewFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
