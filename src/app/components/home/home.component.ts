import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(public authService: AuthService) {
    }
}
