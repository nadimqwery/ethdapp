import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTokenComponent } from './about-token.component';

describe('AboutTokenComponent', () => {
  let component: AboutTokenComponent;
  let fixture: ComponentFixture<AboutTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
