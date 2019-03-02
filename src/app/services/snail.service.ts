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
export class SnailService {

  constructor(
    private http: HttpClient
  ) { }

  solveProblem(wellHeight, initialClimb, nightlySlide, fatigue): Observable<any> {

    const data = {
      wellHeight: wellHeight,
      initialClimb: initialClimb,
      nightlySlide: nightlySlide,
      fatigue: fatigue
    };

    return this.http.post<Snail>('http://localhost:3000/results', data, httpOptions);
  }

}
