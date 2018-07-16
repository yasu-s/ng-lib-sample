import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLib2Component } from './sample-lib2.component';

describe('SampleLib2Component', () => {
  let component: SampleLib2Component;
  let fixture: ComponentFixture<SampleLib2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleLib2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleLib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
