import { Component } from '@angular/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
  selector: 'tk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(angulartics2GoogleTagManager: Angulartics2GoogleTagManager) {
  }

}
