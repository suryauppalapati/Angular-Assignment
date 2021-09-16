import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent {
  userModel = new User('Rob', 'Newyork Street - 73', 'rob@test.com', 8897598592, '');
  submitted = false;
  errorMsg = '';

  constructor() {}

  onSubmit() {
  console.log(this.userModel);
  alert('Details saved on console!')
  }
}


















