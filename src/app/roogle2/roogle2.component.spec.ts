import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roogle2Component } from './roogle2.component';

describe('Roogle2Component', () => {
  let component: Roogle2Component;
  let fixture: ComponentFixture<Roogle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roogle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roogle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
