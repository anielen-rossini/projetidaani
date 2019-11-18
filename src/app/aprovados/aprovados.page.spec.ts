import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovadosPage } from './aprovados.page';

describe('AprovadosPage', () => {
  let component: AprovadosPage;
  let fixture: ComponentFixture<AprovadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
