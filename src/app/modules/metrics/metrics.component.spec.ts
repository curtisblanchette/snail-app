import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsComponent } from './metrics.component';
import { expect } from '@angular/platform-browser/testing/src/matchers';
import { describe } from 'selenium-webdriver/testing';

describe('LogComponent', () => {
  let component: MetricsComponent;
  let fixture: ComponentFixture<MetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
