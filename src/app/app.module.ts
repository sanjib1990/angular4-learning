import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { CoursesComponent } from './Courses.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ColorService } from './services/color.service';
import { PanelComponent } from './panel/panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { SummaryPipe } from './pipes/summary/summary.pipe';
import { ColorsComponent } from './colors/colors.component';
import { PostsService } from './services/posts/posts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from './pipes/title-case/title-case.pipe';
import { PostsComponent } from './components/posts/posts.component';
import { ZippyComponent } from './components/zippy/zippy.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { InputFormatDirective } from './directive/input-format.directive';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { NewCourseComponentComponent } from './components/new-course-component/new-course-component.component';
import { AppErrorHandler } from './common/app.error.handler';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers/github-followers.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AppRoutes } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './services/auth/auth.service';
import { OrderService } from './services/order/order.service';
import { JsonHeaders } from './models/json-headers';
import { ApiHeaders } from './models/api-headers';
import { AppStorage } from './common/app.storage';
import { TokenManager } from './common/token.manager';
import { AuthGuard } from './services/auth-guard/auth-guard.service';

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
        NotFoundComponent,
        AdminComponent,
        LoginComponent,
        NoAccessComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes.getRoutes())
    ],
    providers: [
        CoursesService,
        ColorService,
        PostsService,
        GithubFollowersService,
        { provide: ErrorHandler, useClass: AppErrorHandler },
        AuthService,
        OrderService,
        JsonHeaders,
        ApiHeaders,
        AppStorage,
        TokenManager,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
