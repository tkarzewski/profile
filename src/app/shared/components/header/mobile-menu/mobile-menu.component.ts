import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'tk-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  @Input() isDisplayed = false;
  @Output() menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  jumpTo(fragment: string) {

    this.toggleMenu();

    const navigationExtras: NavigationExtras = {
      fragment: fragment
    };
    this.router.navigate(['/'], navigationExtras);
    return false;
  }


  downloadPdf() {
    this.toggleMenu();
    console.log('MobileMenuComponent, downloadPdf called');
  }

  toggleMenu() {
    this.isDisplayed = !this.isDisplayed;
    this.menuToggled.emit(this.isDisplayed);
  }

}
