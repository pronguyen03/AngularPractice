import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Account } from "./account";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { stringify } from "@angular/core/src/util";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class LoginService {
  private accountsUrl = "http://localhost:4200/api/accounts"; // URL to web api

  constructor(private http: HttpClient) {}
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  // Get
  getAccounts(): Observable<any> {
    return this.http.get(this.accountsUrl).pipe(map(this.extractData));
  }
  addAccount(account): Observable<any> {
    return this.http
      .post<any>(
        this.accountsUrl + "/signup",
        JSON.stringify(account),
        httpOptions
      )
      .pipe(
        tap(account =>
          console.log(`added account w/ username=${account.username}`)
        ),
        catchError(this.handleError<any>("addAccount"))
      );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
