import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from '../../services/personne.service';
import * as html2pdf from 'html2pdf.js';
import { Personne } from 'src/app/model/personne';
import { AuthService } from 'src/app/services/auth.service';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css'],
})
export class SearchDataComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  type: string;
  SearchForm: FormGroup;
  listPersonsN: Personne[];
  listPersonsD: Personne[];

  isLoggedIn: boolean;
  username: string;
  CurrentDate = new Date();
  hey: boolean;
  visible: boolean;
  searchButton: boolean;
  datedeces: string;
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'fr',
  };

  stripeTest: FormGroup;

  constructor(
    private service: ActivatedRoute,
    private servicePerson: PersonneService,
    private serviceAuth: AuthService,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private notService: NotificationsService
  ) {}

  onSucces(message) {
    this.notService.success('Succés', message, {
      position: ['button', 'right'],
      timeout: 1,
      animate: 'fade',
    });
  }
  onError(message) {
    this.notService.error('Erreur', message, {
      position: ['button', 'right'],
      timeout: 500,
      animate: 'fade',
      showProgressBar: true,
    });
  }

  ngOnInit(): void {
    console.log(this.CurrentDate);
    this.searchButton = true;
    this.visible = true;
    this.stripeTest = this.fb.group({});
    this.hey = true;
    this.isLoggedIn = this.serviceAuth.isLoggedIn;
    this.type = this.service.snapshot.params.type;
    console.log(this.type);
    this.SearchForm = new FormGroup({
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+$'),
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+$'),
      ]),
      dateNaissance: new FormControl('', [Validators.required]),
      dateDeces: new FormControl('', [Validators.required]),
    });
  }
  HtmlPDF() {
    let nom: string = this.SearchForm.get('nom').value;
    let prenom: string = this.SearchForm.get('prenom').value;
    this.datedeces = this.SearchForm.get('dateDeces').value;
    this.servicePerson
      .searchPerson(
        nom.toLowerCase(),
        prenom.toLowerCase(),
        this.SearchForm.get('dateNaissance').value,
        this.datedeces,
        this.type
      )
      .subscribe(
        (data: Personne[]) => {
          if (this.type == 'naissance') {
            this.listPersonsN = data;
            if (this.listPersonsN != undefined && this.listPersonsN.length) {
              this.visible = false;

              console.log('succes');
              this.onSucces(
                'Nous avons trouvez vos informations, passez au paiement pour télécharger votre document'
              );
              this.SearchForm.disable();
              this.searchButton = false;
            } else this.onError('Les informations sont invalides');
          }

          if (this.type == 'deces') {
            this.listPersonsD = data;
            if (this.listPersonsD != undefined && this.listPersonsD.length) {
              this.visible = false;
              console.log('succes');

              setTimeout(() => {
                this.onSucces(
                  'Nous avons trouvez vos informations, passez au paiement pour télécharger votre document'
                );
              }, 500);
              this.SearchForm.disable();
              this.searchButton = false;
            } else this.onError('Les informations sont invalides');
          }
        },
        (error) => {
          alert(error);
        }
      );
  }

  createToken(): void {
    const name: string = localStorage.getItem('username');
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
          this.username = localStorage.getItem('username').toUpperCase();
          if (this.type == 'naissance') {
            this.onSucces(
              'Votre acte de naissance est en cours de préparation, veuillez patienter'
            );
            const options = {
              margin: 1,
              filename:
                'ActeNaissance' +
                this.SearchForm.get('nom').value +
                this.SearchForm.get('prenom').value +
                '.pdf',
              image: { type: 'png' },
              html2canvas: { scale: 3, y: 0, scrollY: 0 },
              jsPDF: { format: 'A4' },
            };
            this.hey = false;
            var content = document.getElementById('naissance');

            html2pdf().from(content).set(options).save();
            setTimeout(() => {
              this.hey = true;
            }, 1000);
            this.SearchForm.reset();
            this.SearchForm.enable();
            this.stripeTest.reset();
          }
          if (this.type == 'deces') {
            this.onSucces(
              'Votre acte de décès est en cours de préparation, veuillez patienter'
            );
            const options = {
              margin: 1,
              filename:
                'ActeDeces' +
                this.SearchForm.get('nom').value +
                this.SearchForm.get('prenom').value +
                '.pdf',
              image: { type: 'png' },
              html2canvas: { scale: 3, y: 0, scrollY: 0 },
              jsPDF: { format: 'A4' },
            };
            this.hey = false;
            var content = document.getElementById('deces');

            html2pdf().from(content).set(options).save();
            setTimeout(() => {
              this.hey = true;
            }, 1000);
            this.SearchForm.reset();
            this.SearchForm.enable();
            this.stripeTest.reset();
          }
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
}
