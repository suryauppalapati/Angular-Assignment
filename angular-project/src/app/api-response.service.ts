import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {apiData} from '../app/fakeapi/models/apiResponse';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiResponseService {
  constructor(private _http: HttpClient) {}

  public fakeApiResponse(): Observable<apiData[]> {
    return this._http
      .get<apiData[]>("https://jsonplaceholder.typicode.com/posts")
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error("An error occurred:", error.error);
    } else {
      console.error(
        `${error.status}`,
        error.error
      );
    }
    return throwError("Oops! Try again");
  }
}