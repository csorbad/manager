import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../interface';

@Component({
  selector: 'app-library-modal',
  templateUrl: './library.modal.component.html',
})
export class LibraryModalComponent implements OnInit {
  @Input() bookData: Book;

  constructor() { }

  ngOnInit() {}
}
