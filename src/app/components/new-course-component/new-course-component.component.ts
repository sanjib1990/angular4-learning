import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'new-course',
    templateUrl: './new-course-component.component.html',
    styleUrls: ['./new-course-component.component.css']
})
export class NewCourseComponentComponent {
    public form;
    // new FormGroup({
    //     name: new FormControl(''),
    //     contact: new FormGroup({
    //         email: new FormControl(''),
    //         phone: new FormControl('')
    //     }),
    //     topics: new FormArray([])
    // });

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            // name: ['', Validators.required],
            // contact: fb.group({
            //     email: [],
            //     phone: []
            // }),
            topics: fb.array([])
        });
    }

    onKeyPress(topic: HTMLInputElement) {
        (this.topics as FormArray).push(new FormControl(topic.value));
        topic.value = '';
    }

    removeCourse(topic: FormControl) {
        let index = this.topics.controls.indexOf(topic);

        this.topics.removeAt(index);
    }

    get topics() {
        return this.form.get('topics') as FormArray;
    }
}
