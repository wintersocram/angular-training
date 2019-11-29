import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  private _authors: any[] = [
    {name: 'John Doe'},
    {name: 'Mary Jane'},
    {name: 'Any Smith'},
  ];
  constructor() { }

  get authors() {
    return this._authors;
  }
}
