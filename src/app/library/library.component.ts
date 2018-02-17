import { Component, OnInit } from '@angular/core';
import { LibraryService } from './library.service';
import { Book } from './interface';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books: Book[];
  bookData: Book[];

  constructor(private librarySrv: LibraryService) { }

  ngOnInit() {
    this.books = this.librarySrv.getBooks();
  }

  editBookData(book: Book[]) {
    this.bookData = book;
  }
}
