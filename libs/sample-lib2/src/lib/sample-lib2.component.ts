import { Component, OnInit } from '@angular/core';
import { of, empty, NEVER, from, throwError } from 'rxjs';

import { SampleData, SampleLib2Model } from './sample-lib2.model';


@Component({
  selector: 'lib-sample-lib2',
  template: `
    <p (click)="onClick()">
      sample-lib2 works!
    </p>
  `,
  styles: []
})
export class SampleLib2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    const model = new SampleLib2Model();
    const data = { name: 'hoge' } as SampleData;

    const modelKeys = Object.keys(model);
    const dataKeys = Object.keys(data);

    const aaa = Object.entries(SampleLib2Model);
    const bbb = Object.getPrototypeOf(SampleLib2Model);
    const ccc = Object.getOwnPropertySymbols(SampleLib2Model);
    const ddd = Object.getPrototypeOf(model);

    if (modelKeys.length === dataKeys.length) {

    }

    from([of('aaa'), empty(), NEVER]).subscribe(
        (value) => {
            console.log('of() - success - ' + value);
        }, err => {
            console.log('of() - error');
        }, () => {
            console.log('of() - complete');
        }
    );

    NEVER.subscribe(
        () => {
            console.log('NEVER - success');
        }, err => {
            console.log('NEVER - error');
        }, () => {
            console.log('NEVER - complete');
        }
    );

    empty().subscribe(
        () => {
            console.log('empty() - success');
        }, err => {
            console.log('empty() - error');
        }, () => {
            console.log('empty() - complete');
        }
    );

    of('sample').subscribe(
        (value) => {
            console.log('of() - success - ' + value);
        }, err => {
            console.log('of() - error');
        }, () => {
            console.log('of() - complete');
        }
    );

    throwError('err').subscribe(
        (value) => {
            console.log('throwError() - success - ' + value);
        }, err => {
            console.log('throwError() - error - ' + err);
        }, () => {
            console.log('throwError() - complete');
        }
    );
  }
}
