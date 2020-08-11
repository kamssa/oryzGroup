import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSalaireComponent } from './dialog-salaire.component';

describe('DialogSalaireComponent', () => {
  let component: DialogSalaireComponent;
  let fixture: ComponentFixture<DialogSalaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSalaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
