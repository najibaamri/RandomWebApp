import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccueilClientComponent } from './accueil-client/accueil-client.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { OnlineServicesComponent } from './online-services/online-services.component';
import { SearchDataComponent } from './search-data/search-data.component';

const ROUTES: Routes = [
  {
    path: 'homeClient',
    component: ClientHomeComponent,
    children: [
      { path: 'accueilClient', component: AccueilClientComponent },
      { path: '', redirectTo: 'accueilClient', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'onlineServices', component: OnlineServicesComponent },
      { path: 'searchData/:type', component: SearchDataComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
})
export class ClientRoutingModule {}
