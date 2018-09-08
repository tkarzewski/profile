import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { delay } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiUrl = environment.urlApi;
    let apiEndpoint = apiUrl + req.url;

    // If an PHP-Script is called use the origin url
    if (req.url.indexOf('.php') !== -1) {

      return next.handle(req);
    } else if (environment.useMockData) {

      // If mockdata should be used
      const mockUrl = 'assets/data/';
      apiEndpoint = mockUrl + req.url + '.json';
    }

    const configuredUrlRequest = req.clone({url: apiEndpoint});

    // TODO Remove delay
    return next.handle(configuredUrlRequest)
      .pipe(delay(Math.floor((Math.random() * 10000) + 1)));
  }
}
