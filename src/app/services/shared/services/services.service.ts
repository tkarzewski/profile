import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicesService {

  constructor(private httpClient: HttpClient) {
  }

  getServices(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>('/assets/data/services.json');
  }
}
