import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {AppError} from '../common/app.error';
import {HttpClient} from '@angular/common/http';
import {NotFoundError} from '../common/not.found.error';
import {InvalidInputError} from '../common/invalid.input.error';

export class DataService {
    protected url: string;

    constructor(protected http: HttpClient) {
    }

    public get(): any {
        return this
            .http
            .get(this.url, {observe: 'response'})
            .map(response => response.body)
            .catch(this.handleError);
    }

    public create(resource) {
        return this
            .http
            .post(this.url, resource, {observe: 'response'})
            .map(response => response.body)
            .catch(this.handleError);
    }

    public update(resourceId, params) {
        return this
            .http
            .patch(this.url + '/' + resourceId, params)
            .catch(this.handleError);
    }

    public delete(resourceId) {
        return this
            .http
            .delete(this.url + '/' + resourceId)
            .catch(this.handleError);
    }

    protected handleError(error: Response) {
        if (error.status === 404) {
            return Observable.throw(new NotFoundError(error));
        }

        if (error.status === 400) {
            return Observable.throw(new InvalidInputError(error));
        }

        return Observable.throw(new AppError(error));
    }
}
