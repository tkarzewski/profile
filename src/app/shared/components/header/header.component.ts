import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuDisplayed = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuDisplayed = !this.isMenuDisplayed;
  }
}
