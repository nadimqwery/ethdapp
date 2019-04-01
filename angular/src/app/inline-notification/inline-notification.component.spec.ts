import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineNotificationComponent } from './inline-notification.component';

describe('InlineNotificationComponent', () => {
  let component: InlineNotificationComponent;
  let fixture: ComponentFixture<InlineNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
