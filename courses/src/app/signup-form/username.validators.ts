import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class UsernameValidators {
    static cannotHasX(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf('x') != -1) {
            return {
                cannotHasX: 'aaaa'
            };
        }

        return null;
    }
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') != -1) {
            return {
                cannotContainSpace: true
            };
        }

        return null;
    }
    static customMinLength(control: AbstractControl, minLengthValue: number = 4): ValidationErrors | null {
        if((control.value as string).length < minLengthValue) {
            return {
                customMinLength: {
                    requiredLength: minLengthValue,
                    actualLength: control.value.length
                }
            };
        }

        return null;
    }
    static customMinLength2(minLen: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const hasMin = (control.value as string).length < minLen;
            return hasMin ? {
                aliasMinUsernameLength: {
                    value: control.value, 
                    requiredLength: minLen
                }
            } : null;
        };
    }
}
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
}
export function customMinLength(minLen: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const hasMin = (control.value as string).length < minLen;
        return hasMin ? {
            aliasMinLength: {
                value: control.value, 
                requiredLength: minLen
            }
        } : null;
    };
}
