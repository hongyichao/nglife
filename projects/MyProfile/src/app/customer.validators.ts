import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomerValidators {
  static invalidUserName(control: FormControl): {[s: string]: boolean} {
    if ((control.value + '').toUpperCase() === 'TEST') {
      return {'invalidUserName': true};
    }
    return null;
  }

  static asyncInvalidPassword(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === '123') {
          resolve({'invalidPassword': true});
        } else {
          resolve(null);
        }
      }, 1000);
    })
    return promise;
  }
}
