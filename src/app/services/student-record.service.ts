import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import {
  studentInterface,
  studentInterfaceResposnse,
} from '../Interfaces/demotableData';

@Injectable({
  providedIn: 'root',
})
export class StudentRecordService {
  baseUrl = '../../assets/demoUser.json';
  // baseUrl="https://reqres.in/api/users";
  constructor(public http: HttpClient) {}

  public getAllRecords(): Observable<any> {
    debugger;
    return this.http.get<studentInterfaceResposnse>(this.baseUrl).pipe(
      map((res: studentInterfaceResposnse) => {
        return res;
      })
    );
  }
}
