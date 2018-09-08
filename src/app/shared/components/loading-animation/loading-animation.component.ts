import { Component, Input, OnInit } from '@angular/core';
import { LoadingAnimationType } from './models/loading-animation-type.enum';

@Component({
  selector: 'tk-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.css']
})
export class LoadingAnimationComponent implements OnInit {

  @Input() type: LoadingAnimationType = LoadingAnimationType.SPINNER;
  @Input() message: string;
  @Input() iconClass: string;
  @Input() messageClass: string;

  loadingAnimationType = LoadingAnimationType;

  constructor() { }

  ngOnInit() {
  }

}
