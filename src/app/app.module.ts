import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component';

import * as Raven from 'raven-js';

Raven
  .config('https://eb41f92dc87440919cf8f10b8f440efd@sentry.io/1277499')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    Raven.captureException(err);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: ErrorHandler, useClass: RavenErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
