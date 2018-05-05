import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { Book } from '../interface';
import {FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-library-modal',
  templateUrl: './library.modal.component.html',
})
export class LibraryModalComponent implements OnInit, OnChanges {
  @Input() bookData: Book;
  @Input() modalTitle: string;
  @Input() buttonTitle: string;
  @Input() action: string;
  @Output() saveBook = new EventEmitter();
  libraryForm: FormGroup;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.libraryForm = new FormGroup({
      title: new FormControl(this.bookData.title, Validators.required),
      author: new FormControl(this.bookData.author, Validators.required),
      series: new FormControl(this.bookData.series),
      publisher: new FormControl(this.bookData.publisher, Validators.required),
      year: new FormControl(this.bookData.year, Validators.maxLength(4)),
      cover: new FormControl(this.bookData.cover),
      isbn: new FormControl(this.bookData.isbn, this.shouldBeUnique),
      description: new FormControl(this.bookData.description),
    });
  }

  ngOnInit() {}

  get title() {
    return this.libraryForm.get('title');
  }

  get author() {
    return this.libraryForm.get('author');
  }

  get publisher() {
    return this.libraryForm.get('publisher');
  }

  get year() {
    return this.libraryForm.get('year');
  }

  get isbn() {
    return this.libraryForm.get('isbn');
  }

  shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  bookActionHandler() {
    this.saveBook.emit({book: this.bookData, action: this.action});
  }
}
