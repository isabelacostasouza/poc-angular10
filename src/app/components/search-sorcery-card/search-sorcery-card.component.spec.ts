/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchSorceryCardComponent } from './search-sorcery-card.component';

describe('SearchSorceryCardComponent', () => {
  let component: SearchSorceryCardComponent;
  let fixture: ComponentFixture<SearchSorceryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSorceryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSorceryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
