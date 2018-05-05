import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Http } from '@angular/http';

@Injectable()
export class LibraryService {

  public constructor(private http: Http, private injector: Injector) {}

  getBooksFromDb() {
    const books = this.http.get('http://127.0.0.1:8000/api/books')
      .map(
        resp => resp.json()
      );

    return books;
  }

  async saveBook(bookData) {
    const res = await  this.http.post('http://127.0.0.1:8000/api/book', bookData).toPromise();

    return res.status;
  }

  updateBook(bookData) {
    return this.http.put('http://127.0.0.1:8000/api/book', bookData)
      .map(
        resp => resp.json()
      );
  }

  deleteBook(bookId) {

    console.log(bookId);

    return this.http.delete(`http://127.0.0.1:8000/api/book/${bookId}`);
  }
}
