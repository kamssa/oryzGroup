import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTechnicComponent } from './manage-technic.component';

describe('ManageTechnicComponent', () => {
  let component: ManageTechnicComponent;
  let fixture: ComponentFixture<ManageTechnicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTechnicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTechnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
