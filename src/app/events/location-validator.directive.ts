import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  /*
  By setting 'multi' to true,
  the line below simply adds the LocationValidatorDirective to the NG_VALIDATORS, which comprises a list of Angular's built-in validators.
  */
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true }]
})
export class LocationValidatorDirective implements Validator {

  constructor() { }

  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls['address'];
    const cityControl = formGroup.controls['city'];
    const countryControl = formGroup.controls['country'];
    const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    // Either the address, city and country fields are filled or the online url field is filled
    if (
      (addressControl && addressControl.value &&
      cityControl && cityControl.value &&
      countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null;
    }
    return { validateLocation: false };
  }


}
