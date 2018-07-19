import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCursoComponent } from './m-curso.component';

describe('MCursoComponent', () => {
  let component: MCursoComponent;
  let fixture: ComponentFixture<MCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
