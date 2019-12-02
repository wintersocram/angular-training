import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  // firstName: string;
  comment: string;

  constructor() { }

  onSubmit() {
    // console.log(`[onSubmit()]\n\tfirstName: ${ this.firstName }\n\tcomment: ${ this.comment }`);
  }

  log(x) {
    console.log(`[log()]\n\tx: %o`, x);
  }

  ngOnInit() {
  }

}
