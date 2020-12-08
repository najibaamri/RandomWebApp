import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonneComponent } from './admin/add-personne/add-personne.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ListPersonnesComponent } from './admin/list-personnes/list-personnes.component';
import { UpdatePersonneComponent } from './admin/update-personne/update-personne.component';
import { AboutComponent } from './client/about/about.component';
import { AccueilClientComponent } from './client/accueil-client/accueil-client.component';
import { ContactComponent } from './client/contact/contact.component';
import { LoginComponent } from './client/login/login.component';
import { OnlineServicesComponent } from './client/online-services/online-services.component';
import { SearchDataComponent } from './client/search-data/search-data.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'adminHome', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'clientHome', loadChildren: './client/client.module#ClientModule' },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminHomeComponent },
  {
    path: 'accueilClient',
    component: AccueilClientComponent,
  },
  { path: 'contact', component: ContactComponent },
  { path: 'personnes', component: ListPersonnesComponent },
  { path: 'addPersonne', component: AddPersonneComponent },
  { path: 'personnes/updatePersonne/:id', component: UpdatePersonneComponent },
  { path: 'login', component: LoginComponent },
  { path: 'onlineServices', component: OnlineServicesComponent },
  { path: 'searchData', component: SearchDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
