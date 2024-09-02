import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteModule } from './site/site.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './utils/custom-route-reuse-strategy';
import { environment } from 'src/environments/environment';
import { initializeApp, /*provideFirebaseApp*/ } from 'firebase/app';
import {provideFirestore, getFirestore} from '@angular/fire/firestore'
import { provideFirebaseApp } from '@angular/fire/app';
import { NgxEditorComponent } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { AuthSiteModule } from './auth-site/auth-site.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AuthSiteModule


  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
