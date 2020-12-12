import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxStripeModule } from 'ngx-stripe';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxStripeModule.forRoot(
      'pk_test_51HwuC5DPe9yprXGcNSeGHeJo2Me2z0gbSyESDNI0Uadx4F8iUIg2T3BxSvbMY3gYYsf5xB6fMIkEG3190wQJUDjq00cdUCPwuq'
    ),
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    ClientModule,
    AdminModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-CA' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
