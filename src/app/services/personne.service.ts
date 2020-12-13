import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  url = 'http://localhost:3000/personnes/';

  constructor(private http: HttpClient) {}

  getPersonnes() {
    return this.http
      .get<Personne[]>('http://localhost:3000/personnes')
      .pipe(catchError(this.handleError));
  }
  postUser(personne: Personne) {
    return this.http
      .post(this.url, personne)
      .pipe(catchError(this.handleError));
  }
  deletePerson(id) {
    return this.http.delete(this.url + id).pipe(catchError(this.handleError));
  }
  updatePerson(id, personne: Personne) {
    return this.http
      .put(this.url + id, personne)
      .pipe(catchError(this.handleError));
  }
  getPersonDetails(id) {
    return this.http.get(this.url + id).pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error.message || 'server Error');
  }

  searchPerson(
    nom: string,
    prenom: string,
    dateNaissance: string,
    dateDeces: string,
    type: string
  ) {
    if (type == 'naissance') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?nom=' +
          nom +
          '&prenom=' +
          prenom +
          '&dateNaissance=' +
          dateNaissance
      );
    } else if (type == 'deces') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?nom=' +
          nom +
          '&prenom=' +
          prenom +
          '&dateDeces=' +
          dateDeces
      );
    }
  }

  Recherche(type: string, value: string) {
    if (type == 'Tout') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?q=' + value
      );
    } else if (type == 'Nom') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?nom_like=' + value
      );
    } else if (type == 'Prénom') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?prenom_like=' + value
      );
    } else if (type == 'Sexe') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?sexe_like=' + value
      );
    } else if (type == 'Date de naissance') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?dateNaissance_like=' + value
      );
    } else if (type == 'Lieu de naissance') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?lieuNaissance_like=' + value
      );
    } else if (type == 'Nom du père') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?nomPere_like=' + value
      );
    } else if (type == 'Nationalité du père') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?natioPere_like=' + value
      );
    } else if (type == 'Nom de la mère') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?nomMere_like=' + value
      );
    } else if (type == 'Nationalité de la mère') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?natioMere_like=' + value
      );
    } else if (type == 'Situation familiale') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?sitFamiliale_like=' + value
      );
    } else if (type == 'Date de décès') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?dateDeces_like=' + value
      );
    } else if (type == 'Lieu de décès') {
      return this.http.get<Personne[]>(
        'http://localhost:3000/personnes?lieuDeces_like=' + value
      );
    }
  }
}
