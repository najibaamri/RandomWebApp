import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ListPersonnesComponent } from './list-personnes/list-personnes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';

const ROUTES: Routes = [
  {
    path: 'admin',
    component: NavBarComponent,
    children: [
      { path: 'dashboard', component: AdminHomeComponent },

      { path: 'personnes', component: ListPersonnesComponent },
      { path: 'addPersonne', component: AddPersonneComponent },
      {
        path: 'personnes/updatePersonne/:id',
        component: UpdatePersonneComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
})
export class AdminRoutingModule {}
