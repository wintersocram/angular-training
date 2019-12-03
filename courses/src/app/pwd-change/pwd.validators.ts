import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PdwValidators {
    static checkOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== '1234')
                    resolve({ checkOldPwd: true });
                else
                    resolve( null );
            }, 1000);
        });
    }
    static matchNewPassword(control: AbstractControl) {
        let newPwd = control.get('newPwd');
        let confirmNewPwd = control.get('confirmNewPwd');

        console.log('%o, %o, %o',newPwd.value, confirmNewPwd.value, newPwd.value !== confirmNewPwd.value);

        if (newPwd.value !== confirmNewPwd.value) {
            console.log('return');
            return { NewPwdDoesntMatch: true };
        }
        return null;
    }
}