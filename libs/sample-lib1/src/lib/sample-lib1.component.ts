import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sample-lib1',
  template: `
    <p>
      sample-lib1 works!
    </p>
  `,
  styles: []
})
export class SampleLib1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
