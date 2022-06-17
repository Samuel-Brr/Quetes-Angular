import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function isRequiredValidator(id: string, title: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    // Get first control value
    const value1 = control.get(id)!.value;
    // Get second control value
    const value2 = control.get(title)!.value;

    if (!(value1 || value2)) {
      return { 'isRequired': 'id or title required' };
    } else {
      return null;
    }
  };
}
