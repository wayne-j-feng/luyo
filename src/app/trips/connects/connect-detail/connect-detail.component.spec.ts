import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectDetailComponent } from './connect-detail.component';

describe('ConnectDetailComponent', () => {
  let component: ConnectDetailComponent;
  let fixture: ComponentFixture<ConnectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
