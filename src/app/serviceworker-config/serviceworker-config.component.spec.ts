import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceworkerConfigComponent } from './serviceworker-config.component';

describe('ServiceworkerConfigComponent', () => {
  let component: ServiceworkerConfigComponent;
  let fixture: ComponentFixture<ServiceworkerConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceworkerConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceworkerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
