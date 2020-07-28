import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOperationTravauxComponent } from './edit-operation-travaux.component';

describe('EditOperationTravauxComponent', () => {
  let component: EditOperationTravauxComponent;
  let fixture: ComponentFixture<EditOperationTravauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOperationTravauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOperationTravauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
