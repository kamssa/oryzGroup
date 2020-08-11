import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalaireComponent } from './edit-salaire.component';

describe('EditSalaireComponent', () => {
  let component: EditSalaireComponent;
  let fixture: ComponentFixture<EditSalaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSalaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
