import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMENUComponent } from './profile-menu.component';

describe('ProfileMENUComponent', () => {
  let component: ProfileMENUComponent;
  let fixture: ComponentFixture<ProfileMENUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMENUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMENUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
