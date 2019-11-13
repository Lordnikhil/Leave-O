import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsPage } from './reasons.page';

describe('ReasonsPagePage', () => {
  let component: ReasonsPage;
  let fixture: ComponentFixture<ReasonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
