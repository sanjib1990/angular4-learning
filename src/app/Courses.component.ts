import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <div (keyup.enter)="propagationKeyup()">
            <h2> {{ getTitle() }} </h2>
            <pre>
                {{ randVar.title | uppercase | lowercase }}
                {{ randVar.price | currency:'INR' }}
                {{ randVar.rating | number:'2.2-2' }}
                {{ randVar.students | number }}
                {{ randVar.releaseDate | date:'shortDate'}}
                {{ randString | summary:50 }}
            </pre>
            <ul>
                <li *ngFor="let course of getCourses()"> {{ course }}</li>
            </ul>
            <input (keyup)="onKeyUp()" #field id="aaa">
            <input (keyup)="onKeyUp()" [(ngModel)]="field1">
            <button
                class="btn btn-primary"
                [class.active]="isActive"
                [style.backgroundColor]="isActive ? 'yellow' : 'red'" (click)="onSave()">
                Save
            </button>
        </div>
    `
})
export class CoursesComponent {
    public field1: string;
    public randVar = {
        title: 'Course Title 1',
        rating: 4.9745,
        students: 30134,
        price: 301.22,
        releaseDate: new Date(2018, 1, 1)
    };
    public randString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ' +
        'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ' +
        'qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat' +
        ' cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    private title = 'Courses Title';
    private courses: string[];
    isActive = true;

    constructor(private service: CoursesService) {
    }

    getTitle() {
        return 'Title is ' + this.title;
    }

    getCourses() {
        return this.service.getCourses();
    }

    onSave() {
        this.isActive = !this.isActive;
    }

    onKeyUp() {
        console.log('key up');
    }

    propagationKeyup() {
        console.log('BUBBLE KEY UP', this.field1);
    }
}
