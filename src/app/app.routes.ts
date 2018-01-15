import { CoursesComponent } from './Courses.component';
import { ColorsComponent } from './colors/colors.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { NewCourseComponentComponent } from './components/new-course-component/new-course-component.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { AuthGuard } from './services/auth-guard/auth-guard.service';

export class AppRoutes {
    public static getRoutes() {
        return [
            { path: '', component: HomeComponent },
            { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
            { path: 'login', component: LoginComponent },
            { path: 'no-access', component: NoAccessComponent },
            { path: 'followers', component: GithubFollowersComponent, canActivate: [AuthGuard] },
            {
                path: 'followers/profile/:userId/:username',
                component: GithubProfileComponent,
                canActivate: [AuthGuard]
            },
            { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
            { path: 'change/password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
            { path: 'new/courses', component: NewCourseComponentComponent, canActivate: [AuthGuard] },
            { path: 'signup', component: SignupFormComponent },
            { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
            { path: 'colors', component: ColorsComponent, canActivate: [AuthGuard] },
            { path: '**', component: NotFoundComponent }
        ];
    }
}
