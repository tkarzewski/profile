import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { PersonComponent } from './person/person.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectService } from './projects/services/project.service';
import { SkillsService } from './skills/services/skills.service';
import { ServicesService } from './services/services/services.service';


@NgModule({
  declarations: [
    ProfileComponent,
    PersonComponent,
    ProjectsComponent,
    ServicesComponent,
    SkillsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ProjectService,
    ServicesService,
    SkillsService
  ]
})
export class ProfileModule {
}
