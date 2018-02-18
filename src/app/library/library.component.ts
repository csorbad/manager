import { Component, OnInit } from '@angular/core';
import { LibraryService } from './library.service';
import { Book } from './interface';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  private readonly CREATE = 'create';
  private readonly EDIT = 'edit';
  private readonly EDIT_BOOK = 'Edit book';
  private readonly NEW_BOOK = 'New book';
  private readonly SAVE_CHANGES = 'Save changes';
  private readonly CREATE_NEW_BOOK = 'Create new book';

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
    this.modalTitle = this.EDIT_BOOK;
    this.buttonTitle = this.SAVE_CHANGES;
    this.action = this.EDIT;
  }

  openCreateModal() {
    this.bookData = Object.assign({}, {
      id: this.books.length + 1,
      title: '',
      author: '',
      publisher: ''
    });
    this.modalTitle = this.NEW_BOOK;
    this.buttonTitle = this.CREATE_NEW_BOOK;
    this.action = this.CREATE;
  }

  createOrUpdateBook(event) {
    const bookData = event['book'];

    if (this.CREATE === event['action']) {
      this.books.push(bookData);
    }

    if (this.EDIT === event['action']) {
      this.books.map((book) => {
        if (book.id === bookData.id) {
          Object.assign(book, bookData);
        }

        return book;
      });
    }
  }
}
