import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';

import { Person } from '../models/person.model';

@Injectable()
export class PersonService {

  private data: ReplaySubject<Person> = new ReplaySubject<Person>();
  private loadingStarted = false;

  constructor(private httpClient: HttpClient) {
  }

  stream$(): Observable<Person> {
    if (!this.loadingStarted) {
      this.loadData();
    }

    return this.data.asObservable();
  }

  loadData() {
    this.loadingStarted = true;
    this.httpClient.get<Person>('/assets/data/person.json')
      .subscribe(
        response => this.data.next(new Person(response)),
        error => {
          this.data.error(error);
          this.data = new ReplaySubject();
        });

  }

}
