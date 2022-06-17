import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function anneeDeSortieBetween1900AndCurrentYearValidator(annéeDeSortie: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    // Get first control value
    const inputedDate: number = control.get(annéeDeSortie)!.value;
    const currentYear: number = new Date().getFullYear()


    if (1900 >= inputedDate && inputedDate <= currentYear) {
      return { 'date out of valid range': 'Release date must be between 1900 and *** (current year)' };
    } else {
      return null;
    }
  };
}
