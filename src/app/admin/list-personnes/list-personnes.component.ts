import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, Input, OnInit } from '@angular/core';
import { callbackify } from 'util';
import { Personne } from '../../model/personne';
import { PersonneService } from '../../services/personne.service';

@Component({
  selector: 'app-list-personnes',
  templateUrl: './list-personnes.component.html',
  styleUrls: ['./list-personnes.component.css'],
})
export class ListPersonnesComponent implements OnInit {
  listPersonnes: Personne[];
  personne: Personne;
  totalRecords: number;
  page: number = 1;
  type: string;
  value: string;
  inputType: string;
  nbPersonnes: number;
  constructor(private servicePersonne: PersonneService) {}

  ngOnInit(): void {
    this.servicePersonne.getPersonnes().subscribe(
      (data: Personne[]) => {
        this.listPersonnes = data;
        this.totalRecords = this.listPersonnes.length;
      },
      (error) => {
        alert(error);
      }
    );
    this.personne = new Personne();
  }

  delete(id) {
    this.servicePersonne.deletePerson(id).subscribe(
      () =>
        (this.listPersonnes = this.listPersonnes.filter(
          (personne) => personne.id != id
        )),
      (error) => {
        alert(error);
      }
    );
  }

  rechercher() {
    this.servicePersonne.Recherche(this.type, this.value).subscribe(
      (data: Personne[]) => {
        this.listPersonnes = data;
        this.totalRecords = this.listPersonnes.length;
        this.nbPersonnes = this.listPersonnes.length;
      },
      (error) => {
        alert(error);
      }
    );
    this.personne = new Personne();
  }

  guessInput() {
    if (this.type == 'Date de naissance' || this.type == 'Date de décès')
      this.inputType = 'date';
    else this.inputType = 'text';
  }

  hello() {
    this.type = 'Tout';
  }
}
