import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'bookFilter',
  pure: false
})
export class BookFilterPipe implements PipeTransform {
  transform(value: any, filterStr: string): any {

    if (value.length === 0 || filterStr === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      console.log(item+":" +filterStr);
      if ((item.toUpperCase()).includes(filterStr.toUpperCase())) {
        resultArray.push(item);
      }
    }
    console.log(resultArray);
    return resultArray;
  }
}
