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
  courses: ICourse[];
  newCourse: ICourse;
  newCourseDefault: ICourse = {id: 0, name: null};

  constructor(private service:CourseService) {
    this.getCourses();
    this.setDefault();
  }

  getCourses() {
    this.courses = this.service.courses;
  }
  setDefault() {
    this.newCourse = Object.assign({}, this.newCourseDefault);
  }
  /**
   * Insert new course using the service
   */
  set course(course: ICourse) {
    if (!course) throwError;

    // get new id
    this.newCourse.id = this.service.newId;
    // insert using service
    this.service.course = this.newCourse;
  }

  onAdd() {
    this.course = this.newCourse
    // clear new course
    this.setDefault();
  }

  onDelete(id: number) {
    if (!id) throwError;

    this.service.deleteById(id);
  }

  onDeleteAll() {
    this.service.deleteAll("DELETE");
    this.getCourses();
  }

  ngOnInit() {}
}
