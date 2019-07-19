import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Pet } from './pet';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/v1/pets';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(apiUrl)
      .pipe(
        tap(pet => console.log('fetched pets')),
        catchError(this.handleError('getPets', []))
      );
  }

  getPet(id: number): Observable<Pet> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Pet>(url).pipe(
      tap(_ => console.log(`fetched pet id=${id}`)),
      catchError(this.handleError<Pet>(`getPet id=${id}`))
    );
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(apiUrl, pet, httpOptions).pipe(
      tap((prod: Pet) => console.log(`added pet w/ id=${pet.id}`)),
      catchError(this.handleError<Pet>('addPet'))
    );
  }

  updatePet(id: any, pet: Pet): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, pet, httpOptions).pipe(
      tap(_ => console.log(`updated pet id=${id}`)),
      catchError(this.handleError<any>('updatePet'))
    );
  }

  deletePet(id: any): Observable<Pet> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Pet>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted pet id=${id}`)),
      catchError(this.handleError<Pet>('deletePet'))
    );
  }
}
