import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaiementSalaireTravauxComponent } from './edit-paiement-salaire-travaux.component';

describe('EditPaiementSalaireTravauxComponent', () => {
  let component: EditPaiementSalaireTravauxComponent;
  let fixture: ComponentFixture<EditPaiementSalaireTravauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPaiementSalaireTravauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaiementSalaireTravauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
