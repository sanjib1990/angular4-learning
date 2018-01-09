import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {AppError} from '../../common/app.error';
import {NotFoundError} from '../../common/not.found.error';
import {InvalidInputError} from '../../common/invalid.input.error';

@Injectable()
export class PostsService {
    private url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {
    }

    public get(): any {
        return this.http.get(this.url, {observe: 'response'});
    }

    public create(post) {
        return this.http.post(this.url, post, {observe: 'response'}).catch((error: Response) => {
            if (error.status === 400) {
                return Observable.throw(new InvalidInputError(error));
            }

            return Observable.throw(new AppError(error));
        });
    }

    public update(postId, params) {
        return this.http.patch(this.url + '/' + postId, params);
    }

    public delete(postId) {
        return this.http.delete(this.url + '/' + postId).catch((error: Response) => {
            console.log(error);

            if (error.status === 404) {
                return Observable.throw(new NotFoundError(error));
            }
            return Observable.throw(new AppError(error));
        });
    }
}
