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
    cin: number
  ) {
    return this.http.get<Personne[]>(
      'http://localhost:3000/personnes?nom=' +
        nom +
        '&prenom=' +
        prenom +
        '&dateNaissance=' +
        dateNaissance +
        '&cin=' +
        cin
    );
  }
}
