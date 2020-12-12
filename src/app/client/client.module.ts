import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientHomeComponent } from './client-home/client-home.component';
import { AboutComponent } from './about/about.component';
import { AccueilClientComponent } from './accueil-client/accueil-client.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlineServicesComponent } from './online-services/online-services.component';
import { SearchDataComponent } from './search-data/search-data.component';
import { NgxStripeModule } from 'ngx-stripe';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [
    ClientHomeComponent,
    AboutComponent,
    AccueilClientComponent,
    ContactComponent,
    LoginComponent,
    OnlineServicesComponent,
    SearchDataComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot(
      'pk_test_51HwuC5DPe9yprXGcNSeGHeJo2Me2z0gbSyESDNI0Uadx4F8iUIg2T3BxSvbMY3gYYsf5xB6fMIkEG3190wQJUDjq00cdUCPwuq'
    ),
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
  ],
})
export class ClientModule {}
