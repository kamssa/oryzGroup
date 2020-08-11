import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAchatComponent } from './detail-achat.component';

describe('DetailAchatComponent', () => {
  let component: DetailAchatComponent;
  let fixture: ComponentFixture<DetailAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
