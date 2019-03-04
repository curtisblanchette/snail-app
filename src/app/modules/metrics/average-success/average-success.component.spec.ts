import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageSuccessComponent } from './average-success.component';
import { expect } from '@angular/platform-browser/testing/src/matchers';
import { describe } from 'selenium-webdriver/testing';

describe('AverageSuccessComponent', () => {
  let component: AverageSuccessComponent;
  let fixture: ComponentFixture<AverageSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
