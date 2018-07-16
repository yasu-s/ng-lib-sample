import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLib1Component } from './sample-lib1.component';

describe('SampleLib1Component', () => {
  let component: SampleLib1Component;
  let fixture: ComponentFixture<SampleLib1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleLib1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleLib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
