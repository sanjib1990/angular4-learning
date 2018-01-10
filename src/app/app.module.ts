import {ErrorHandler, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoursesService} from './courses.service';
import {CoursesComponent} from './Courses.component';
import {HttpClientModule} from '@angular/common/http';
import {ColorService} from './services/color.service';
import {PanelComponent} from './panel/panel.component';
import {BrowserModule} from '@angular/platform-browser';
import {SummaryPipe} from './pipes/summary/summary.pipe';
import {ColorsComponent} from './colors/colors.component';
import {PostsService} from './services/posts/posts.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TitleCasePipe} from './pipes/title-case/title-case.pipe';
import {PostsComponent} from './components/posts/posts.component';
import {ZippyComponent} from './components/zippy/zippy.component';
import {FavouriteComponent} from './favourite/favourite.component';
import {InputFormatDirective} from './directive/input-format.directive';
import {SignupFormComponent} from './components/signup-form/signup-form.component';
import {CourseFormComponent} from './components/course-form/course-form.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {NewCourseComponentComponent} from './components/new-course-component/new-course-component.component';
import {AppErrorHandler} from './common/app.error.handler';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import {GithubFollowersService} from './services/github-followers/github-followers.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        ColorsComponent,
        SummaryPipe,
        FavouriteComponent,
        TitleCasePipe,
        PanelComponent,
        InputFormatDirective,
        ZippyComponent,
        ContactFormComponent,
        CourseFormComponent,
        SignupFormComponent,
        NewCourseComponentComponent,
        ChangePasswordComponent,
        PostsComponent,
        GithubFollowersComponent,
        NavbarComponent,
        HomeComponent,
        GithubProfileComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent},
            { path: 'followers', component: GithubFollowersComponent},
            { path: 'followers/profile/:userId/:username', component: GithubProfileComponent},
            { path: 'posts', component: PostsComponent},
            { path: 'change/password', component: ChangePasswordComponent},
            { path: 'new/courses', component: NewCourseComponentComponent},
            { path: 'signup', component: SignupFormComponent},
            { path: 'courses', component: CoursesComponent},
            { path: 'colors', component: ColorsComponent},
            { path: '**', component: NotFoundComponent}
        ])
    ],
    providers: [
        CoursesService,
        ColorService,
        PostsService,
        GithubFollowersService,
        {provide: ErrorHandler, useClass: AppErrorHandler}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
