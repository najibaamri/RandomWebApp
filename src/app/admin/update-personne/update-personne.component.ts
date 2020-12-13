import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneService } from '../../services/personne.service';

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
  sitFamiliale: string;
  lieuDeces: string;
  editForm = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    sexe: new FormControl(),
    dateNaissance: new FormControl(),
    lieuNaissance: new FormControl(),
    nomPere: new FormControl(),
    natioPere: new FormControl(),
    nomMere: new FormControl(),
    natioMere: new FormControl(),
    sitFamiliale: new FormControl(),
    dateDeces: new FormControl(),
    lieuDeces: new FormControl(),
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
        nom: new FormControl(result['nom'], [
          Validators.required,
          Validators.pattern('[a-zA-Z]+$'),
        ]),
        prenom: new FormControl(result['prenom'], [
          Validators.required,
          Validators.pattern('[a-zA-Z]+$'),
        ]),
        sexe: new FormControl(result['sexe'], [Validators.required]),
        dateNaissance: new FormControl(result['dateNaissance'], [
          Validators.required,
        ]),
        lieuNaissance: new FormControl(result['lieuNaissance'], [
          Validators.required,
        ]),
        nomPere: new FormControl(result['nomPere'], [
          Validators.required,
          Validators.pattern('[a-zA-Z]+$'),
        ]),
        natioPere: new FormControl(result['natioPere'], [Validators.required]),
        nomMere: new FormControl(result['nomMere'], [
          Validators.required,
          Validators.pattern('[a-zA-Z]+$'),
        ]),
        natioMere: new FormControl(result['natioMere'], [Validators.required]),
        sitFamiliale: new FormControl(result['sitFamiliale'], [
          Validators.required,
        ]),
        dateDeces: new FormControl(result['dateDeces']),
        lieuDeces: new FormControl(result['lieuDeces']),
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
