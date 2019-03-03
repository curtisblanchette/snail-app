import { Injectable } from '@angular/core';
import { Snail } from '../interfaces/snail';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class DataService {

  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  register(data): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/register`, data, httpOptions);
  }

  login(data): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/login`, data, httpOptions);
  }

  solveProblem(data): Observable<any> {
    return this.http.post<Snail>(`${this.baseUrl}/results`, data, httpOptions);
  }

  getAllRequestLogs(): Observable<any> {
    return this.http.get<Snail>(`${this.baseUrl}/logs`, httpOptions);
  }

  getAverageSuccessRate(): Observable<any> {
    return this.http.get<Snail>(`${this.baseUrl}/results/aggregate`, httpOptions);
  }

}
