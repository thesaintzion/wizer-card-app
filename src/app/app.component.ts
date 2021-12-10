import { Component } from '@angular/core';
import { of } from 'rxjs';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  count$ = of(NaN);

  constructor(htt: MyService) {

  }
}
