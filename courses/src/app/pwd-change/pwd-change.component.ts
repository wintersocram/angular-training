import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PdwValidators } from './pwd.validators';

@Component({
  selector: 'pwd-change',
  templateUrl: './pwd-change.component.html',
  styleUrls: ['./pwd-change.component.css']
})
export class PwdChangeComponent {
  form = new FormGroup(
    {
      oldPwd: new FormControl('',
        Validators.required,
        PdwValidators.checkOldPassword
      ),
      newPwd: new FormControl('',
        [
          Validators.required, 
          Validators.minLength(5)
        ]
      ),
      confirmNewPwd: new FormControl('', Validators.required)
    }, {
      validators: PdwValidators.matchNewPassword 
    }
  );

  onSubmit(form: FormGroup) {
    console.log('[onSubmit()] FORM : %o', form);
  }

  get oldPwd() {
    return this.form.get('oldPwd');
  }
  get newPwd() {
    return this.form.get('newPwd');
  }
  get confirmNewPwd() {
    return this.form.get('confirmNewPwd');
  }
}
