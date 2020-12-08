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
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ClientModule {}
