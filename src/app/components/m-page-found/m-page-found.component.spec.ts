import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPageFoundComponent } from './m-page-found.component';

describe('MPageFoundComponent', () => {
  let component: MPageFoundComponent;
  let fixture: ComponentFixture<MPageFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPageFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPageFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
