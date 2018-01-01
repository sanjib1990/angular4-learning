import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CoursesService} from './courses.service';
import {CoursesComponent} from './Courses.component';
import {ColorService} from './services/color.service';
import {BrowserModule} from '@angular/platform-browser';
import {SummaryPipe} from './pipes/summary/summary.pipe';
import { PanelComponent } from './panel/panel.component';
import {ColorsComponent} from './colors/colors.component';
import { TitleCasePipe } from './pipes/title-case/title-case.pipe';
import { ZippyComponent } from './components/zippy/zippy.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { InputFormatDirective } from './directive/input-format.directive';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CourseFormComponent } from './components/course-form/course-form.component';

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
        CourseFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        CoursesService,
        ColorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
