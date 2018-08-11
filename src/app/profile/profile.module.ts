import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { PersonComponent } from './person/person.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectService } from './projects/shared/services/project.service';
import { SkillsService } from './skills/shared/services/skills.service';
import { ServicesService } from './services/shared/services/services.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
