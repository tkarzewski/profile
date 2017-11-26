import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMobileMenuOpened = false;

  constructor() { }

  ngOnInit() {
  }

}
