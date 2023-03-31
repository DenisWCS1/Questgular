/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppMagicOvenComponent } from './app-magic-oven.component';

describe('AppMagicOvenComponent', () => {
  let component: AppMagicOvenComponent;
  let fixture: ComponentFixture<AppMagicOvenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMagicOvenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMagicOvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
