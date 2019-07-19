/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetAddComponent } from './pet-add.component';

describe('PetAddComponent', () => {
  let component: PetAddComponent;
  let fixture: ComponentFixture<PetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
