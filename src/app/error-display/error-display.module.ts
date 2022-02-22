import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShowErrorComponent } from './show-error/show-error.component';



@NgModule({
  declarations: [ShowErrorComponent],
  imports: [CommonModule,MatFormFieldModule],
  exports: [ShowErrorComponent],
})
export class ErrorDisplayModule {}
