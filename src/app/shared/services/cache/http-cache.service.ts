import { Injectable } from '@angular/core';

@Injectable()
export class HttpCache {

  private cache: {[key: string]: any } = {};

  public set(key: string, data: any) {
    if (key && typeof key === 'string') {
      this.cache[key] = data;
    }
  }

  public get(key: string): any {
    return this.cache[key];
  }

}
