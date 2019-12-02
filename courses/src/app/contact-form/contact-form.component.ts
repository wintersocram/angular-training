import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  // firstName: string;
  comment: string;

  constructor() { }

  submit(form: NgForm) {
    console.log(`[submit()]\n\tform: %o`, form);
    // form.reset();
  }

  log(x) {
    console.log(`[log()]\n\tx: %o`, x);
  }

  ngOnInit() {
  }

}
