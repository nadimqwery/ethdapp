import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformServicesComponent } from './platform-services.component';

describe('PlatformServicesComponent', () => {
  let component: PlatformServicesComponent;
  let fixture: ComponentFixture<PlatformServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
