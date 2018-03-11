import { Component, OnInit } from '@angular/core';
import { LibraryService } from './library.service';
import { Book } from './interface';
import { UUID } from 'angular2-uuid';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  private readonly CREATE = 'create';
  private readonly EDIT = 'edit';

  books: Book[];
  bookData: Book;
  modalTitle: any;
  buttonTitle: any;
  action: string;

  constructor(private librarySrv: LibraryService, private translate: TranslateService) { }

  ngOnInit() {
    this.books = this.librarySrv.getBooks();
  }

  openEditModal(book: Book) {
    this.bookData = Object.assign({}, book);
    this.action = this.EDIT;

    this.translate.get('Library.Edit_Book').subscribe((modalTitle: string) => {
      this.modalTitle = modalTitle;
    });
    this.translate.get('Library.Save_changes').subscribe((buttonTitle: string) => {
      this.buttonTitle = buttonTitle;
    });
  }

  openCreateModal() {
    this.bookData = Object.assign({}, {
      id: UUID.UUID(),
      title: '',
      author: '',
      publisher: ''
    });

    this.translate.get('Library.New_book').subscribe((modalTitle: string) => {
      this.modalTitle = modalTitle;
    });
    this.translate.get('Library.Create_new_book').subscribe((buttonTitle: string) => {
      this.buttonTitle = buttonTitle;
    });

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

  deleteBook(bookData) {
    this.books = this.books.filter((book) => bookData.id !== book.id);
  }

  showBookInfo(book: Book) {
    this.bookData = book;
  }
}
