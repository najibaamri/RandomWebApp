import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/app/services/personne.service';
import { jsPDF } from 'jspdf';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css'],
})
export class SearchDataComponent implements OnInit {
  type: string;
  SearchForm: FormGroup;
  listPersons: Personne[];

  constructor(
    private service: ActivatedRoute,
    private servicePerson: PersonneService
  ) {}

  ngOnInit(): void {
    this.type = this.service.snapshot.params.type;
    console.log(this.type);
    this.SearchForm = new FormGroup({
      nom: new FormControl(),
      prenom: new FormControl(),
      dateNaissance: new FormControl(),
      cin: new FormControl(),
    });
  }
  downloadPDF() {
    this.servicePerson
      .searchPerson(
        this.SearchForm.get('nom').value,
        this.SearchForm.get('prenom').value,
        this.SearchForm.get('dateNaissance').value,
        this.SearchForm.get('cin').value
      )
      .subscribe(
        (data: Personne[]) => {
          this.listPersons = data;
          if (this.type == 'naissance') {
            console.log('downloading');
            const doc = new jsPDF();
            doc.text('Acte de Naissance', 15, 15);
            doc.text(this.listPersons[0].nom, 15, 30);
            doc.text(this.listPersons[0].prenom, 15, 40);
            doc.text(this.listPersons[0].dateNaissance, 15, 50);
            doc.save('acteNaissance');
          }
          if (this.type == 'deces') {
            console.log('downloading');
            const doc = new jsPDF();
            let a: string = this.listPersons[0].cin.toString();
            doc.text('Acte de Décès', 15, 15);
            doc.text(this.listPersons[0].nom, 15, 30);
            doc.text(this.listPersons[0].prenom, 15, 40);
            doc.text(a, 15, 50);
            doc.save('acteDécès');
          }
        },
        (error) => {
          alert(error);
        }
      );
  }
}
