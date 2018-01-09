import {AppError} from '../../common/app.error';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NotFoundError} from '../../common/not.found.error';
import {PostsService} from '../../services/posts/posts.service';
import {InvalidInputError} from '../../common/invalid.input.error';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    public posts: any[];
    public httpError = false;
    public errorMessage: string;
    public form: FormGroup;

    constructor(private postService: PostsService, fb: FormBuilder) {
        this.form = fb.group({
            title: []
        });
    }

    ngOnInit(): void {
        this
            .postService
            .get()
            .subscribe(response => {
                console.log(response);
                this.posts = response.body;
            }, (error: Response) => {
                console.log(error);
                this.errorMessage = error.statusText;
                this.httpError = true;
            });
    }

    public createPosts(input: HTMLInputElement) {
        let post = {title: input.value};
        input.value = '';

        this
            .postService
            .create(post)
            .subscribe(response => {
                console.log(response);
                this.posts.splice(0, 0, response.body);
            }, (error: AppError) => {
                console.log(error);
                this.errorMessage = 'Something went terribly wrong.';
                this.httpError = true;

                if (error instanceof InvalidInputError) {
                    this.errorMessage = 'Invalid Payload';
                }
            });
    }

    public updatePost(post) {
        this
            .postService
            .update(post.id, {isRead: true})
            .subscribe(response => {
                console.log(response);
                post.isRead = true;
            }, (error: Response) => {
                console.log(error);
                this.errorMessage = error.statusText;
                this.httpError = true;
            });
    }

    public deletePost(post) {
        this
            .postService
            .delete(post.id)
            .subscribe(response => {
                console.log(response);
                post.isDeleted = true;
            }, (error: AppError) => {
                this.httpError = true;
                if (error instanceof NotFoundError) {
                    this.errorMessage = 'Item Not Found';

                    return;
                }
                this.errorMessage = 'Something Went terribly wrong';
            });
    }

}
