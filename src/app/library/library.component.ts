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
    this.librarySrv.getBooksFromDb().subscribe(
      data => {
        this.books = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  openEditModal(book: Book) {
    this.bookData = Object.assign({}, book);
    this.action = this.EDIT;
    this.modalTitle = this.translate.instant('Library.Edit_Book');
    this.buttonTitle = this.translate.instant('Save');
  }

  openCreateModal() {
    this.bookData = Object.assign({}, {
      id: UUID.UUID(),
      title: '',
      author: '',
      publisher: ''
    });
    this.modalTitle = this.translate.instant('Library.New_book');
    this.buttonTitle = this.translate.instant('Create');
    this.action = this.CREATE;
  }

  createOrUpdateBook(event) {
    const bookData = event['book'];

    if (this.CREATE === event['action']) {
      this.librarySrv.saveBook(bookData);
      this.books.push(bookData);
    }

    if (this.EDIT === event['action']) {
      this.librarySrv.updateBook(bookData).subscribe(
        data => {
          console.log(data);
          this.books.map((book) => {
            if (book.id === bookData.id) {
              Object.assign(book, bookData);
            }

            return book;
          });
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deleteBook(bookData) {
    this.librarySrv.deleteBook(bookData.id).subscribe(
      data => {
        console.log(data);
        this.books = this.books.filter((book) => bookData.id !== book.id);
      },
      error => {
        console.log(error);
      }
    );
  }

  showBookInfo(book: Book) {
    this.bookData = book;
  }
}
