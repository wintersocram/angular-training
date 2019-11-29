import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { ICourse } from './course.interface';
import { throwError } from 'rxjs';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  private _courses: ICourse[];
  constructor(private service:CourseService) {
    this._courses = service.courses;
  }

  get courses() {
    return this._courses;
  }
  set course(course: ICourse) {
    if (!course) throwError;
    // this.service.courses(courses);
  }
  getCourseById(courseId: number) {
    if (!courseId) throwError;
    return this.service.getCourseById(courseId);
  }

  ngOnInit() {}
}
