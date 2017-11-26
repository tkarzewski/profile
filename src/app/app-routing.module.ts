import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { StartComponent } from './start/start.component';
import { ExperienceComponent } from './experience/experience.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'leistungen', component: ServicesComponent },
  { path: 'erfahrung', component: ExperienceComponent },
  { path: 'technologien', component: TechnologiesComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', component: StartComponent }
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
