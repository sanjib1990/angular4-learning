import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public invalidLogin: boolean;

    constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute) {
    }

    signIn(credentials) {
        this
            .authService
            .login(credentials)
            .subscribe(result  => {
                if (result) {
                    const url = this.route.snapshot.queryParamMap.get('returnUrl');
                    return this.router.navigate([url || '/']);
                }

                return this.invalidLogin = true;
            });
    }
}
