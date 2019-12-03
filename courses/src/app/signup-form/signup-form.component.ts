import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators, customMinLength } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      // Validators.minLength(3),
      // UsernameValidators.cannotContainSpace,
      // customMinLength(15),
      // UsernameValidators.customMinLength2(10)
      ]
      ,[UsernameValidators.asynchronousShouldBeUnique]
    ),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  login() {
    // let isValid = authService.login(this.form.value);
    // if(!isValid) {
    //   this.form.setErrors({
    //     invalidLogin: true
    //   });
    // }

    // this.username.setErrors({
    //   aliasASBU: true
    // });

    this.form.setErrors({
      invalidLogin: true
    });
  }
}
