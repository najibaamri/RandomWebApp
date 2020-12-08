import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonnesComponent } from './list-personnes.component';

describe('ListPersonnesComponent', () => {
  let component: ListPersonnesComponent;
  let fixture: ComponentFixture<ListPersonnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
