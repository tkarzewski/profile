import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listValues'
})
@Injectable()
export class ListValuesPipe implements PipeTransform {
  transform(items: Array<any>, attribute: string): string {
    let returnValue = '';
    if (Array.isArray(items) && items.length > 0) {
      let item;
      for (let i = 0; i < items.length; i++) {
        item = items[i];
        returnValue += (attribute ? item[attribute] : item);
        returnValue += (i !== items.length - 1) ? ', ' : '';
      }
    }

    return returnValue;
  }
}
