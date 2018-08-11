import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonService } from './services/person/person.service';
import { ListValuesPipe } from './pipes/list-values.pipe';
import { RouterModule } from '@angular/router';
import { MobileMenuComponent } from './components/header/mobile-menu/mobile-menu.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ListValuesPipe,
    MobileMenuComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ListValuesPipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        PersonService
      ]
    };
  }
}
