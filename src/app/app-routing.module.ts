import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { StartComponent } from './start/start.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { OnepagerComponent } from './onepager/onepager.component';


const appRoutes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'leistungen', component: ServicesComponent },
  { path: 'erfahrung', component: ExperienceComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: OnepagerComponent }
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
