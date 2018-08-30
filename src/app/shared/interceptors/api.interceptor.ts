import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiUrl = environment.urlApi;
    let apiEndpoint = apiUrl + req.url;

    if (environment.useMockData) {
      const mockUrl = 'assets/data/';
      apiEndpoint = mockUrl + req.url + '.json';
    }

    const configuredUrlRequest = req.clone({url: apiEndpoint});

    return next.handle(configuredUrlRequest);
  }
}
