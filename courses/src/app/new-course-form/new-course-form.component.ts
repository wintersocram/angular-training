import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  // OR

  form2;
  constructor(fb: FormBuilder) {
    this.form2 = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  // addTopic(topic: HTMLInputElement) {
  //   this.topics.push(new FormControl(topic.value));
  //   topic.value = '';
  // }
  // removeTopic(topic: FormControl) {
  //   let index = this.topics.controls.indexOf(topic);
  //   this.topics.removeAt(index);
  // }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
