import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DanzeUiModule } from 'projects/danze-ui/src/lib/danze-ui.module';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    DanzeUiModule
  ]
})
export class ExamplesModule { }
