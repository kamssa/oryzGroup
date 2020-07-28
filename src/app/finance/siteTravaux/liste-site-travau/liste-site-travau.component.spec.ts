import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSiteTravauComponent } from './liste-site-travau.component';

describe('ListeSiteTravauComponent', () => {
  let component: ListeSiteTravauComponent;
  let fixture: ComponentFixture<ListeSiteTravauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSiteTravauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSiteTravauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
