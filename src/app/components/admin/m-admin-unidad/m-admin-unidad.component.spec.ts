import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAdminUnidadComponent } from './m-admin-unidad.component';

describe('MAdminUnidadComponent', () => {
  let component: MAdminUnidadComponent;
  let fixture: ComponentFixture<MAdminUnidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAdminUnidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAdminUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
