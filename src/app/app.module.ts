import {NgModule} from '@angular/core';
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
        PostsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        CoursesService,
        ColorService,
        PostsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
