import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileModule } from './profile/profile.module';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactService } from './contact/services/contact.service';
import { FormsModule } from '@angular/forms';


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
    AppRoutingModule,
    SharedModule.forRoot(),
    ProfileModule
  ],
  providers: [
    HttpClient,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
