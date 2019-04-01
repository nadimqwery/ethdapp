import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEscrowComponent } from './register-escrow.component';

describe('RegisterEscrowComponent', () => {
  let component: RegisterEscrowComponent;
  let fixture: ComponentFixture<RegisterEscrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEscrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEscrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
