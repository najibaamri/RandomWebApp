import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css'],
})
export class UpdatePersonneComponent implements OnInit {
  id: number;
  alert: boolean;
  lieuNaissance: string;
  nationalite: string;
  natioPere: string;
  natioMere: string;
  sexe: string;
  editForm = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    sexe: new FormControl(),
    dateNaissance: new FormControl(),
    lieuNaissance: new FormControl(),
    nationalite: new FormControl(),
    nomPere: new FormControl(),
    natioPere: new FormControl(),
    nomMere: new FormControl(),
    natioMere: new FormControl(),
  });
  constructor(
    private servicePersonne: PersonneService,
    private service: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.service.snapshot.params.id;
    this.servicePersonne.getPersonDetails(this.id).subscribe((result) => {
      console.log(result);
      this.editForm = new FormGroup({
        nom: new FormControl(result['nom']),
        prenom: new FormControl(result['prenom']),
        sexe: new FormControl(result['sexe']),
        dateNaissance: new FormControl(result['dateNaissance']),
        lieuNaissance: new FormControl(result['lieuNaissance']),
        nationalite: new FormControl(result['nationalite']),
        nomPere: new FormControl(result['nomPere']),
        natioPere: new FormControl(result['natioPere']),
        nomMere: new FormControl(result['nomMere']),
        natioMere: new FormControl(result['natioMere']),
      });
    });
  }
  update() {
    this.servicePersonne.updatePerson(this.id, this.editForm.value).subscribe(
      (result) => {
        console.log(result, 'user updated with success');
        setTimeout(() => {
          this.router.navigate(['admin/personnes']);
        }, 1000);
        this.alert = true;
      },
      (error) => {
        alert(error);
      }
    );
  }
}
