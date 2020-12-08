import { Component, OnInit } from '@angular/core';
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
}
