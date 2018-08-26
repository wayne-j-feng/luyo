import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFoodsComponent } from './current-foods.component';

describe('CurrentFoodsComponent', () => {
  let component: CurrentFoodsComponent;
  let fixture: ComponentFixture<CurrentFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
