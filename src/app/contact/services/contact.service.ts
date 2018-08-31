import { Injectable } from '@angular/core';
import { ContactRequest } from '../models/contact-request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) {
  }

  sendRequest(request: ContactRequest): Observable<boolean> {
    const url = 'assets/php/contact-workaround.php';
    return this.httpClient.post<boolean>(url, request);
  }
}
