import { Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ShowErrorComponent),
      multi: true,
    },
  ],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class ShowErrorComponent {

  @Input('control')
  control!: ValidationErrors;

  constructor() {}

}
