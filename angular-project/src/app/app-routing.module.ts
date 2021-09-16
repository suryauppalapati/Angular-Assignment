import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupformComponent } from './signupform/signupform.component';
import { FakeapiComponent } from './fakeapi/fakeapi.component'

const routes: Routes = [

  {path : "signupUrl", component: SignupformComponent  },
  {path : "apiUrl", component : FakeapiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignupformComponent, FakeapiComponent]
