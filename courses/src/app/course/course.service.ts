import { Injectable } from '@angular/core';
import { ICourse } from './course.interface';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _courses: ICourse[];
  constructor() {
    this.setDefault();
  }

  get courses(): ICourse[] {
    return this._courses;
  }

  getById(courseId: number) {
    if (!courseId) throwError;

    this._courses.forEach((course, i) => {
      if (course.id === courseId) {
        return course;
      }
    })
  }
  set courses(courses: ICourse[]) {
    if (!courses) throwError;

    this._courses = courses;
  }

  set course(course: ICourse) {
    if (!course) throwError;

    this._courses.push(course);
  }

  get newId() {
    var newId = 0;
    this._courses.forEach((course) => {
      if (course.id > newId) {
        newId = course.id;
      }
    });

    return newId++;
  }

  setDefault() {
    var defaultCourses: ICourse[] = [
      {id: 1, name: 'Course 1'},
      {id: 2, name: 'Course 2'},
      {id: 3, name: 'Course 3'}
    ];
    this.courses = defaultCourses;
  }

  deleteById(courseId: number) {
    if (!courseId) throwError;

    this._courses.forEach((course, i) => {
      if (course.id === courseId) {
        this._courses.splice(i, 1);
        return;
      }
    })
  }

  deleteAll(confirmation: string) {
    if (confirmation !== "DELETE") throwError;

    this._courses = [];
  }
}
