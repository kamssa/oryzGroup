import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBanqueComponent } from './manage-banque.component';

describe('ManageBanqueComponent', () => {
  let component: ManageBanqueComponent;
  let fixture: ComponentFixture<ManageBanqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBanqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
