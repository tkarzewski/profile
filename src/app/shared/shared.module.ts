import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ButtonComponent,
    LoaderComponent
  ],
  exports: [
    ButtonComponent,
    LoaderComponent
  ]
})
export class SharedModule {
}
