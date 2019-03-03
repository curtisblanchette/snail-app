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

  constructor(
    private http: HttpClient
  ) { }

  solveProblem(data): Observable<any> {
    return this.http.post<Snail>('http://localhost:3000/results', data, httpOptions);
  }

  getAllRequestLogs(): Observable<any> {
    return this.http.get<Snail>('http://localhost:3000/logs', httpOptions);
  }

  getAverageSuccessRate(): Observable<any> {
    return this.http.get<Snail>('http://localhost:3000/results/aggregate', httpOptions);
  }

}
