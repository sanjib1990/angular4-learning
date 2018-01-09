import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';

@Component({
    selector: 'signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
    public form = new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(6),
            UsernameValidators.cannotContainSpaces
        ], [
            UsernameValidators.shouldBeUnique
        ]),
        password: new FormControl('', Validators.required)
    });

    get username() {
        return this.form.get('username');
    }

    get password() {
        return this.form.get('password');
    }

    login() {
        let isValid = false;//authService.log(this.form.value);

        if (! isValid) {
            this.form.setErrors({
                invalidLogin: true
            });
        }
    }
}
