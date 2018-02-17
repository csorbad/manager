import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Book } from '../interface';

@Component({
  selector: 'app-library-modal',
  templateUrl: './library.modal.component.html',
})
export class LibraryModalComponent implements OnInit {
  @Input() bookData: Book;
  @Input() modalTitle: string;
  @Input() buttonTitle: string;
  @Input() action: string;
  @Output() saveBook = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  bookActionHandler() {
    this.saveBook.emit({book: this.bookData, action: this.action});
    // TODO: close modal window
  }
}
