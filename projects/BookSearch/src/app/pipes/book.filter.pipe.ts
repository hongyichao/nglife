import { PipeTransform, Pipe } from '@angular/core';
import { BookFilterParams } from '../SharedModels/book-filter-params';

@Pipe({
  name: 'bookFilter',
  pure: false
})
export class BookFilterPipe implements PipeTransform {
  transform(value: any, filterParams: BookFilterParams): any {

    if (value.length === 0 || !filterParams.SearchStr) {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if ((item[filterParams.SelectedMethod].toUpperCase()).includes(filterParams.SearchStr.toUpperCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
