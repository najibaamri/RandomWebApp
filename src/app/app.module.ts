import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { AboutComponent } from './client/about/about.component';
import { AccueilClientComponent } from './client/accueil-client/accueil-client.component';
import { ContactComponent } from './client/contact/contact.component';
import { NavBarComponent } from './admin/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPersonnesComponent } from './admin/list-personnes/list-personnes.component';
import { AddPersonneComponent } from './admin/add-personne/add-personne.component';
import { UpdatePersonneComponent } from './admin/update-personne/update-personne.component';
import { LoginComponent } from './client/login/login.component';
import { InterceptorService } from './services/interceptor';
import { OnlineServicesComponent } from './client/online-services/online-services.component';
import { SearchDataComponent } from './client/search-data/search-data.component';
import { NgxStripeModule } from 'ngx-stripe';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    ClientHomeComponent,
    AboutComponent,
    AccueilClientComponent,
    ContactComponent,
    NavBarComponent,
    ListPersonnesComponent,
    AddPersonneComponent,
    UpdatePersonneComponent,
    LoginComponent,
    OnlineServicesComponent,
    SearchDataComponent,
  ],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
