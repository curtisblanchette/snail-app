import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnailFormComponent } from './snail.component';
import { expect } from '@angular/platform-browser/testing/src/matchers';
import { describe } from 'selenium-webdriver/testing';

describe('SnailFormComponent', () => {
  let component: SnailFormComponent;
  let fixture: ComponentFixture<SnailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
