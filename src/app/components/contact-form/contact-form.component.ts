import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
    contactMethod = [
        {id: 1, name: 'aa'},
        {id: 2, name: 'ab'},
        {id: 3, name: 'ac'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    logChange(target) {
        console.log(' :: CHANGED :: ', target.name);
    }

    onSubmit(contactForm) {
        console.log(contactForm.value);
    }

}
