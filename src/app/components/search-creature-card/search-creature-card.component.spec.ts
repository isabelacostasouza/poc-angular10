/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchCreatureCardComponent } from './search-creature-card.component';

describe('SearchCreatureCardComponent', () => {
  let component: SearchCreatureCardComponent;
  let fixture: ComponentFixture<SearchCreatureCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCreatureCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCreatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
