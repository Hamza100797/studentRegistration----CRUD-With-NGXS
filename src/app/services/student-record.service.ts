import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {
  studentInterface,
  studentInterfaceResposnse,
} from '../Interfaces/demotableData';

@Injectable({
  providedIn: 'root',
})





export class StudentRecordService   {
  baseUrl = '../../assets/demoUser.json';
  apiURL=`http://localhost:5000/app/v1/student`
  errorMsg!: any;
  // baseUrl="https://reqres.in/api/users";
  constructor(public http: HttpClient) {}

  //Getting records from JSON Object
  // public getAllRecords(): Observable<any> {
  //   debugger;
  //   return this.http.get<studentInterfaceResposnse>(this.baseUrl).pipe(
  //     map((res: studentInterfaceResposnse) => {
  //       return res;
  //     })
  //   );
  // }


  getAllRecords(limit:number,offset:number): Observable<any> {
    debugger
    return this.http
            .get(`${this.apiURL}/getAll/${limit}/${offset}`)
            .pipe(
                catchError(error => {
                    let errorMsg: string;
                    if (error.error instanceof ErrorEvent) {
                        this.errorMsg = `Error: ${error.error.message}`;
                    } else {
                        this.errorMsg = this.getServerErrorMessage(error);
                    }

                    return throwError(this.errorMsg)
                })
            );
}


getRecordByID(id:string): Observable<any> {
  return this.http
          .get(`${this.apiURL}/getAll/${id}`)
          .pipe(
              catchError(error => {
                  let errorMsg: string;
                  if (error.error instanceof ErrorEvent) {
                      this.errorMsg = `Error: ${error.error.message}`;
                  } else {
                      this.errorMsg = this.getServerErrorMessage(error);
                  }

                  return throwError(this.errorMsg)
              })
          );
}

DeleteRecordByID(id:string): Observable<any> {
  return this.http
          .delete(`${this.apiURL}/delete/${id}`)
          .pipe(
              catchError(error => {
                  let errorMsg: string;
                  if (error.error instanceof ErrorEvent) {
                      this.errorMsg = `Error: ${error.error.message}`;
                  } else {
                      this.errorMsg = this.getServerErrorMessage(error);
                  }

                  return throwError(this.errorMsg)
              })
          );
}

UpdateRecordByID(id:string): Observable<any> {
  return this.http
          .get(`${this.apiURL}/update/${id}`)
          .pipe(
              catchError(error => {
                  let errorMsg: string;
                  if (error.error instanceof ErrorEvent) {
                      this.errorMsg = `Error: ${error.error.message}`;
                  } else {
                      this.errorMsg = this.getServerErrorMessage(error);
                  }

                  return throwError(this.errorMsg)
              })
          );
}




private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
}

}
