import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAttractionComponent } from './new-attraction.component';

describe('NewAttractionComponent', () => {
  let component: NewAttractionComponent;
  let fixture: ComponentFixture<NewAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
