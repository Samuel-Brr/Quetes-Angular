import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function idOrTitleRequiredValidator(id: string, title: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    // Get first control value
    const value1 = control.get(id)!.value;
    // Get second control value
    const value2 = control.get(title)!.value;

    if (!(value1 || value2)) {
      return { 'id-or-title-missing': 'id or title required' };
    } else {
      return null;
    }
  };
}
