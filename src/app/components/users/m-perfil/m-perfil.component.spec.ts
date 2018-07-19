import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPerfilComponent } from './m-perfil.component';

describe('MPerfilComponent', () => {
  let component: MPerfilComponent;
  let fixture: ComponentFixture<MPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
