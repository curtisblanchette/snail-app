import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogComponent } from './average-success.component';
import { expect } from '@angular/platform-browser/testing/src/matchers';
import { describe } from 'selenium-webdriver/testing';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
