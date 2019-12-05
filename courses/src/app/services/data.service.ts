import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(map(res => res as Object))
      .pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        map(res => res as Object),
        catchError(this.handleError)
      );
  }

  update(resource, content) {
    return this.http.patch(this.url + 'asdasd/' + resource.id, JSON.stringify(content))
      .pipe(map(res => res as Object))
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(map(res => res as Object))
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError(error));
    
    return Observable.throw(new AppError(error));
  }
}
