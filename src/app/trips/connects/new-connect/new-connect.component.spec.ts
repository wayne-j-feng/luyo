import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConnectComponent } from './new-connect.component';

describe('NewConnectComponent', () => {
  let component: NewConnectComponent;
  let fixture: ComponentFixture<NewConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
