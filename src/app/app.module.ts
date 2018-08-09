import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';
import { ServicesComponent } from './services/services.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesService } from './services/shared/services/services.service';
import { ProjectService } from './experience/shared/services/project.service';
import { OnepagerComponent } from './onepager/onepager.component';
import { PersonComponent } from './person/person.component';
import { FooterComponent } from './footer/footer.component';
import { PersonService } from './person/shared/services/person.service';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './skills/shared/services/skills.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    ServicesComponent,
    ExperienceComponent,
    ContactComponent,
    OnepagerComponent,
    PersonComponent,
    FooterComponent,
    SkillsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    ProjectService,
    ServicesService,
    PersonService,
    SkillsService
    /*
    HttpCache,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    }
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
