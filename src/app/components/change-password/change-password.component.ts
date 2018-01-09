import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChangePasswordValidators} from './change-password.validators';

@Component({
    selector: 'change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
    public form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            oldPassword: [
                '',
                Validators.required,
                ChangePasswordValidators.oldPassword],
            newPassword: [
                '',
                [Validators.required]
            ],
            confirmPassword: [
                '',
                Validators.required
            ]
        }, {
            validator: [ChangePasswordValidators.matchNewPassword, ChangePasswordValidators.notSameAsOldPassword]
        });
    }

    get oldPassword() {
        return this.form.get('oldPassword');
    }

    get newPassword() {
        return this.form.get('newPassword');
    }

    get confirmPassword() {
        return this.form.get('confirmPassword');
    }
}
