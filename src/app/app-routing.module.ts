import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ImprintComponent } from './imprint/imprint.component';


const appRoutes: Routes = [
  { path: 'kontakt', component: ContactComponent },
  { path: 'impressum', component: ImprintComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: ProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
