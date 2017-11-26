import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import { HttpCache } from '../../services/cache/http-cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cache: HttpCache) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.method !== 'GET') {
      return next.handle(req);
    }

    const cacheKey = req.url + ((req.params.keys().length > 0) ? '?' + req.params.toString() : '');
    const cachedResponse = this.cache.get(cacheKey);
    if (cachedResponse) {
      return Observable.of(cachedResponse);
    }

    return next.handle(req).do(event => {
      if (event instanceof HttpResponse) {
        this.cache.set(cacheKey, event);
      }
    });
  }

}
