import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingAttractionComponent } from './existing-attraction.component';

describe('ExistingAttractionComponent', () => {
  let component: ExistingAttractionComponent;
  let fixture: ComponentFixture<ExistingAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
