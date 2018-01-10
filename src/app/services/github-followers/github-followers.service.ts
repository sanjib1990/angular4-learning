import {Injectable} from '@angular/core';
import {DataService} from '../data.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GithubFollowersService extends DataService {
    protected url = 'https://api.github.com/users/sanjib1990/followers';

    constructor(http: HttpClient) {
        super(http);
    }

}
