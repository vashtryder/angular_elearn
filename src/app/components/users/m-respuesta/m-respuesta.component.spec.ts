import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRespuestaComponent } from './m-respuesta.component';

describe('MRespuestaComponent', () => {
  let component: MRespuestaComponent;
  let fixture: ComponentFixture<MRespuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRespuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
