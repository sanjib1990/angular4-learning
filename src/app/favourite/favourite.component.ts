import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-favourite',
    templateUrl: './favourite.component.html',
    styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
    @Input('isFav') private isFav: boolean = false;
    @Output('favChange') favChange = new EventEmitter();

    public outputArgs: FavouriteOutputArgs;

    constructor() {
    }

    ngOnInit() {
        this.outputArgs = {
            isFav: this.isFav
        };
    }

    onFavClick() {
        this.outputArgs.isFav = !this.isFav;
        this.favChange.emit(this.outputArgs);
    }
}

export interface FavouriteOutputArgs {
    isFav: boolean;
}
