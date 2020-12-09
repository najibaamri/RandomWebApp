import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/app/services/personne.service';
import * as html2pdf from 'html2pdf.js';
import { Personne } from 'src/app/model/personne';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css'],
})
export class SearchDataComponent implements OnInit {
  type: string;
  SearchForm: FormGroup;
  listPersons: Personne[];
  isLoggedIn: boolean;
  username: string;
  CurrentDate = Date.now();

  constructor(
    private service: ActivatedRoute,
    private servicePerson: PersonneService,
    private serviceAuth: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.serviceAuth.isLoggedIn;
    this.type = this.service.snapshot.params.type;
    console.log(this.type);
    this.SearchForm = new FormGroup({
      nom: new FormControl(),
      prenom: new FormControl(),
      dateNaissance: new FormControl(),
      cin: new FormControl(),
    });
  }
  HtmlPDF() {
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
          this.username = localStorage.getItem('username');
          const options = {
            filename: 'html.pdf',
            image: { type: 'png' },
            html2canvas: {},
            jsPDF: { orientation: 'portrait' },
          };
          const content: Element = document.getElementById('naissance');
          html2pdf().from(content).set(options).save();
        },
        (error) => {
          alert(error);
        }
      );
  }
}
