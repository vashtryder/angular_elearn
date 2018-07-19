import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MExamenComponent } from './m-examen.component';

describe('MExamenComponent', () => {
  let component: MExamenComponent;
  let fixture: ComponentFixture<MExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
