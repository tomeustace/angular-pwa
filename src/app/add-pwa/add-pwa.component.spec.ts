import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPWAComponent } from './add-pwa.component';

describe('AddPWAComponent', () => {
  let component: AddPWAComponent;
  let fixture: ComponentFixture<AddPWAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPWAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPWAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
