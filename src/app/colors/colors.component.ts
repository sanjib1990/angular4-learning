import {Component, OnInit} from '@angular/core';
import {ColorService} from '../services/color.service';
import {FavouriteOutputArgs} from '../favourite/favourite.component';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
    title = 'Color List';
    imgUrl = 'http://lorempixel.com/400/200';
    titleText = '';
    isFav = true;
    sampleFormat = '';

    constructor(private service: ColorService) {
    }

    ngOnInit() {
    }

    getTitle() {
        return 'Title is : ' + this.title;
    }

    getColors() {
        return this.service.getColors();
    }

    onFavChange(eventArgs: FavouriteOutputArgs) {
        this.isFav = eventArgs.isFav;
        console.log('fav changed to ', eventArgs);
    }
}
