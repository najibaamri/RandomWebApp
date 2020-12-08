import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDataComponent } from './search-data.component';

describe('SearchDataComponent', () => {
  let component: SearchDataComponent;
  let fixture: ComponentFixture<SearchDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
