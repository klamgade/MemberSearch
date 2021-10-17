import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { MemberInfo } from '../model/member/member-info';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  membersInfoSourceSubject!: BehaviorSubject<MemberInfo[]>;


  constructor(public http: HttpClient) { 
    this.membersInfoSourceSubject = new BehaviorSubject<MemberInfo[]>([]);
  }
  members = [];
  list(url: string): Observable<MemberInfo[]> {
    return this.http.get<MemberInfo[]>(url).pipe(map((data) => {
      this.membersInfoSourceSubject.next(data)
      return data as MemberInfo[];
    }), catchError(error => {
      return throwError('error thrown', error);
    }));
  }
}
