import { Directive,Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
@Directive({
  //selector: '[appAge]'
  selector: '[appAge][ngModel]',
})
export class AgeDirective {
 // @Input('appAge') minAge!: number;
 //@Input('appAge') appAge: any;

//  validate(control: AbstractControl): { [key: string]: any } | null {
//    if (control.value && this.appAge && this.appAge.minAge) {
//      const minAge = this.appAge.minAge;
//      const dob = new Date(control.value);
//      const today = new Date();
//      const age = today.getFullYear() - dob.getFullYear();

//      if (age < minAge) {
//        return { age: true };
//      }
//    }

//    return null;
//  }
}