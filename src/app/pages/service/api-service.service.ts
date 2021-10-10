import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  employee: Employee[];
  constructor(private http: HttpClient) {
    this.employee = [];
  }
  private MOCK_API = 'https://615ff5c2faa03600179fb7c9.mockapi.io/api/v1/';


  private httpOption = {
    headers: new HttpHeaders({
    }),
  };
  private static handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
   getDUs(): Observable<any> {
    const url = `${this.MOCK_API}/employee`;
    return this.http.get(url, this.httpOption)
      .pipe(
      retry(3), // retry a failed request up to 3 times
        catchError(ApiServiceService.handleError) // then handle the error
    );
  }
}
