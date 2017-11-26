import { Component, EventEmitter, Input, OnChanges, Output, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'tk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnChanges {

  @Input() link = true;
  @Input() type = 'secondary';
  @Input() label: string;
  @Input() title: string;
  @Input() disabled: boolean;
  @Input() outline: boolean;
  @Input() block: boolean;
  @Input() active: boolean;
  @Input() size: string;
  @Input() preIcon: string;
  @Input() postIcon: string;

  @Output() onClick = new EventEmitter<any>();

  classes: Array<string>;

  constructor() {
  }

  ngOnChanges() {
    this.setClasses();
  }

  clicked($event) {
    if (!this.disabled) {
      this.onClick.emit();
    }
    $event.preventDefault();
    $event.stopPropagation();
  }

  private setClasses() {
    this.classes = ['btn'];

    if (this.outline) {
      this.classes.push('btn-outline-' + this.type);
    } else {
      this.classes.push('btn-' + this.type);
    }

    if (this.size) {
      this.classes.push('btn-' + this.size);
    }

    if (this.block) {
      this.classes.push('btn-block');
    }

    if (this.active) {
      this.classes.push('active');
    }

    if (this.disabled) {
      this.classes.push('disabled');
    }
  }
}
