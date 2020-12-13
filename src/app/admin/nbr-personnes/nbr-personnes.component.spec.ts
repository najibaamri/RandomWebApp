import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrPersonnesComponent } from './nbr-personnes.component';

describe('NbrPersonnesComponent', () => {
  let component: NbrPersonnesComponent;
  let fixture: ComponentFixture<NbrPersonnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbrPersonnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrPersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
