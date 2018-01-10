import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {GithubFollowersService} from '../../services/github-followers/github-followers.service';

@Component({
    selector: 'github-followers',
    templateUrl: './github-followers.component.html',
    styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
    public followers: any;

    constructor(private service: GithubFollowersService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        Observable
            .combineLatest([
                this.route.queryParamMap,
                this.route.paramMap
            ])
            .switchMap(params => {
                let userId = params[0].get('userId');
                let page = params[1].get('page');

                return this.service.get();
            })
            .subscribe(followers => this.followers = followers);
    }

}
