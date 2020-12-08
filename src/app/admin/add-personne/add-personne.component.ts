import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../../model/personne';
import { PersonneService } from '../../services/personne.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css'],
})
export class AddPersonneComponent implements OnInit {
  personne: Personne;
  alert: boolean;
  constructor(
    private servicePersonne: PersonneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personne = new Personne();
  }
  addPerson() {
    this.servicePersonne.postUser(this.personne).subscribe(
      () => {
        setTimeout(() => {
          this.router.navigate(['personnes']);
        }, 1000);
        this.alert = true;
      },
      (error) => {
        alert(error);
      }
    );
  }
}
