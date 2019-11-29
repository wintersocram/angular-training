import { Injectable } from '@angular/core';
import { ICourse } from './course.interface';
// import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _courses: ICourse[];
  constructor() {
    // if (defaultCourses && defaultCourses.length > 0) 
    //   this._courses = defaultCourses;
    // else
    this.addCoursesDefault();
  }

  get courses(): ICourse[] {
    return this._courses;
    console.log('[get courses()] courses: %o', this._courses);
  }
  getCourseById(courseId: number) {
    // if (!courseId) throwError;
    this._courses.forEach((course, i) => {
      if (course.id === courseId) {
        return course;
      }
    })
  }
  set courses(value: ICourse[]) {
    // if (!value) throwError;
    this._courses = value;
    console.log('[set courses()] courses: %o', this._courses);
  }
  set course(value: ICourse) {
    // if (!value) throwError;
    this._courses.push(value);
    console.log('[set course()] courses: %o', this._courses);
  }
  addCoursesDefault() {
    var defaultCourses: ICourse[] = [
      {id: 1, name: 'Course 1'},
      {id: 2, name: 'Course 2'},
      {id: 3, name: 'Course 3'}
    ];

    this.courses = defaultCourses;

    console.log('[addCoursesDefault()] courses: %o', this._courses);
  }
  deleteCourseById(courseId: number) {
    // if (!courseId) throwError;

    console.log('[deleteCourseById()] (1) courses: %o', this._courses);

    this._courses.forEach((course, i) => {
      if (course.id === courseId) {
        this._courses.splice(i, 1);
        return;
      }
    })

    console.log('[deleteCourseById()] (2) courses: %o', this._courses);
  }

  deleteAllCourses(confirmation: string) {
    if (confirmation !== "DELETE") {
      // throwError;
      return;
    }

    this._courses = [];

    console.log('[deleteAllCourses()] courses: %o', this._courses);
  }
}
