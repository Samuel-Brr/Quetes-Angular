import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function rangeDateValidator(minYear: number, maxYear: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    // Get first control value
    const inputedDate: number = control.value;



    if (minYear >= inputedDate && inputedDate <= maxYear) {
      return { 'min': `Release date must be between ${minYear} and ${maxYear}` };
    } else {
      return null;
    }
  };
}
