import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tk-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  @Input() isDisplayed = false;
  @Output() menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isDisplayed = !this.isDisplayed;
    this.menuToggled.emit(this.isDisplayed);
  }

}
