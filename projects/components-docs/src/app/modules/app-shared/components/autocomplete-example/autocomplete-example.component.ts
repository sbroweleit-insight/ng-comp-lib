import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const CAR_MAKES = [
  'GMC',
  'Volkswagen',
  'Lexus',
  'Mazda',
  'Ford',
  'Toyota',
  'Mercedes-Benz',
  'Chevrolet',
  'Suzuki',
  'Daewoo',
  'Oldsmobile',
  'Audi',
  'Lincoln',
  'BMW',
  'Porsche',
  'Nissan',
  'Pontiac',
  'Hyundai',
  'Mitsubishi',
];

@Component({
  selector: 'cui-autocomplete-example',
  templateUrl: './autocomplete-example.component.html',
})
export class AutocompleteExampleComponent {
  get makeValue(): string {
    return this.form.controls.make.value ?? '';
  }

  carMakes = CAR_MAKES;

  form = new FormGroup({ make: new FormControl('') }, { updateOn: 'blur' });
}
