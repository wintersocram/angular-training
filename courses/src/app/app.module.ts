import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { EmailService } from './email.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { CourseService } from './course/course.service';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { InputFormatDirective } from './input-format/input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FavoriteComponent,
    LikeComponent,
    ZippyComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
