import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {

  isMenuDisplayed = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuDisplayed = !this.isMenuDisplayed;
  }

}
