import { Component } from '@angular/core';

@Component({
  selector: 'tk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isButtonDisabled = false;

  onClick(buttonNr: string) {
    console.log('Button ' + buttonNr + ' clicked');
  }

}
