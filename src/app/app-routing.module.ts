import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonneComponent } from './admin/add-personne/add-personne.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ListPersonnesComponent } from './admin/list-personnes/list-personnes.component';
import { UpdatePersonneComponent } from './admin/update-personne/update-personne.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
