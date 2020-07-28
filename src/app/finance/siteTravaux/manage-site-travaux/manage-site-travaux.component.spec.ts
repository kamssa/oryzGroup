import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSiteTravauxComponent } from './manage-site-travaux.component';

describe('ManageSiteTravauxComponent', () => {
  let component: ManageSiteTravauxComponent;
  let fixture: ComponentFixture<ManageSiteTravauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSiteTravauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSiteTravauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
