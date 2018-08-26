import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStopComponent } from './new-stop.component';

describe('NewStopComponent', () => {
  let component: NewStopComponent;
  let fixture: ComponentFixture<NewStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
