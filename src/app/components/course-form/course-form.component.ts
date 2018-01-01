import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
    categories = [
        {id: 1, name: 'Development'},
        {id: 2, name: 'Art'},
        {id: 3, name: 'Science'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    logChange(target) {
        console.log(' :: CHANGED :: ', target.name);
    }

    onSubmit(courseForm) {
        console.log(courseForm.value);
    }

}
