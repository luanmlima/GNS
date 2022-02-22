import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotoboyRegistrationComponent } from './motoboy-registration/motoboy-registration.component';

const routes: Routes = [
  { path: 'motoboy', component: MotoboyRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
