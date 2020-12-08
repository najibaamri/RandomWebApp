import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonneComponent } from './update-personne.component';

describe('UpdatePersonneComponent', () => {
  let component: UpdatePersonneComponent;
  let fixture: ComponentFixture<UpdatePersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
