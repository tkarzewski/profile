import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileMenuComponent } from './components/header/mobile-menu/mobile-menu.component';
import { PersonService } from './services/person/person.service';
import { ValidationService } from './services/validation/validation.service';
import { ListValuesPipe } from './pipes/list-values.pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingAnimationComponent,
    ListValuesPipe,
    MobileMenuComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingAnimationComponent,
    ListValuesPipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        PersonService,
        ValidationService
      ]
    };
  }
}
