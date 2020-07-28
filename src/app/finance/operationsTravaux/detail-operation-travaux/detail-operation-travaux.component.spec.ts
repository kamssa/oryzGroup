import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOperationTravauxComponent } from './detail-operation-travaux.component';

describe('DetailOperationTravauxComponent', () => {
  let component: DetailOperationTravauxComponent;
  let fixture: ComponentFixture<DetailOperationTravauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOperationTravauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOperationTravauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
