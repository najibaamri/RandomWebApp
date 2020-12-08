import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListPersonnesComponent } from './list-personnes/list-personnes.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AdminHomeComponent,
    NavBarComponent,
    ListPersonnesComponent,
    AddPersonneComponent,
    UpdatePersonneComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
  ],
})
export class AdminModule {}
