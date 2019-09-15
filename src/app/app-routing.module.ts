import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './examples/buttons/buttons.component';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: '**',
    redirectTo: 'buttons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
