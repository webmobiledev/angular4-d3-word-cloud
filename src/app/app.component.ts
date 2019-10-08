import { Component } from '@angular/core';

import { Data } from './share/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = Data;
  constructor() {
    console.log(this.data);
  }
}
