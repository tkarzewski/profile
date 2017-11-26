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
import { TechnologiesComponent } from './technologies/technologies.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesService } from './services/shared/services/services.service';
import { CacheInterceptor } from './shared/interceptors/cache/cache.interceptor';
import { HttpCache } from './shared/services/cache/http-cache.service';
import { ProjectService } from './experience/shared/services/project.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    ServicesComponent,
    ExperienceComponent,
    TechnologiesComponent,
    ContactComponent
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
    HttpCache,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
