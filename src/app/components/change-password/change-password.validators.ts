import {AbstractControl, ValidationErrors} from '@angular/forms';

export class ChangePasswordValidators {
    public static oldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    if (control.value !== '123') {
                        resolve({
                            oldPassword: true
                        });
                    } else {
                        resolve(null);
                    }
                }, 2000);
            } catch (error) {
                reject(error);
            }
        });
    }

    public static matchNewPassword(control: AbstractControl): ValidationErrors | null {
        if (control.get('newPassword').value !== control.get('confirmPassword').value) {
            return {
                passwordMatched: true
            };
        }

        return null;
    }

    public static notSameAsOldPassword(control: AbstractControl): ValidationErrors | null {
        if (control.get('newPassword').value === control.get('oldPassword').value) {
            return {
                notSameAsOldPassword: true
            };
        }

        return null;
    }
}
