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
  bookData: Book;
  modalTitle: string;
  buttonTitle: string;
  action: string;

  constructor(private librarySrv: LibraryService) { }

  ngOnInit() {
    this.books = this.librarySrv.getBooks();
  }

  openEditModal(book: Book) {
    this.bookData = Object.assign({}, book);
    this.modalTitle = 'Edit book';
    this.buttonTitle = 'Save changes';
    this.action = 'edit';
  }

  openCreateModal() {
    this.bookData = Object.assign({}, {
      id: this.books.length + 1,
      title: '',
      author: '',
      publisher: ''
    });
    this.modalTitle = 'New book';
    this.buttonTitle = 'Create new book';
    this.action = 'create';
  }

  createOrUpdateBook(event: Book) {
    console.log(event);
    // TODO: separate create and update
  }
}
