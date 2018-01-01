import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-zippy',
    templateUrl: './zippy.component.html',
    styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
    public showBody = false;
    public title = '';
    public body = '';

    constructor(private element: ElementRef) {
        this.title = this.element.nativeElement.title;
        this.body = this.element.nativeElement.html;
    }

    ngOnInit() {
    }

    onClick() {
        this.showBody = !this.showBody;
    }

}
