import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceworkerPushComponent } from './serviceworker-push.component';

describe('ServiceworkerPushComponent', () => {
  let component: ServiceworkerPushComponent;
  let fixture: ComponentFixture<ServiceworkerPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceworkerPushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceworkerPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
