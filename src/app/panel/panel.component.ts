import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'bootstrap-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
    @Input('showBody') public showBody = true;

    constructor() {
    }

    ngOnInit() {
    }

}
