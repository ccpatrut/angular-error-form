import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.scss']
})
export class ShowErrorComponent {
  @Input('control')
  control!: ValidationErrors;

}
