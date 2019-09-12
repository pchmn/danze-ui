import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { RoundDirective } from './button.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    RoundDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    RoundDirective
  ]
})
export class ButtonModule { }
