import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  categories = [
    { id: 0, name: '' },
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' }
  ];

  onSubmit(form: NgForm, courseName) {
    console.log('courseName: %o', courseName);
    console.log('%o', form);
  }
  log(x) {
    console.log(`[log()]\n\tx: %o`, x);
  }
}
