import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileModule } from './profile/profile.module';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactService } from './contact/services/contact.service';
import { FormsModule } from '@angular/forms';
import { ApiInterceptor } from './shared/interceptors/api.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ImprintComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleTagManager ]),
    AppRoutingModule,
    SharedModule.forRoot(),
    ProfileModule
  ],
  providers: [
    HttpClient,
    ContactService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
