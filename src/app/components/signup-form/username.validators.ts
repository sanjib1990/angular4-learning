import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
    public static cannotContainSpaces(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            };
        }

        return null;
    }

    public static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    if (control.value === 'sanjib') {
                        resolve({
                            shouldBeUnique: true
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
}
