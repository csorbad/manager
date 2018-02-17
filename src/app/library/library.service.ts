import { Injectable } from '@angular/core';
import { Book } from './interface';
import { books } from '../../data/library.data';

@Injectable()
export class LibraryService {

  getBooks(): Book[] {
    return books;
  }
}
