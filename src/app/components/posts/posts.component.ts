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
    public errorMessage = 'Something terribly went wrong';
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
            .subscribe(posts => this.posts = posts);
    }

    public createPosts(input: HTMLInputElement) {
        let post = {title: input.value};
        input.value = '';

        this
            .postService
            .create(post)
            .subscribe(
                newPost => post['id'] = newPost.id,
                (error: AppError) => {
                    if (error instanceof InvalidInputError) {
                        this.errorMessage = 'Invalid Payload';
                    } else {
                        throw error;
                    }
                });

        this.posts.splice(0, 0, post);
    }

    public updatePost(post) {
        post.isRead = true;
        this.postService.update(post.id, {isRead: true});
    }

    public deletePost(post) {
        this
            .postService
            .delete(post.id)
            .subscribe(
                null,
                (error: AppError) => {
                    this.httpError = true;
                    if (error instanceof NotFoundError) {
                        this.errorMessage = 'Item Not Found';

                        return;
                    }

                    throw error;
                });

        post.isDeleted = true;
    }

}
