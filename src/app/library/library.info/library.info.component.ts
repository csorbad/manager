import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../interface';

@Component({
  selector: 'app-library-info',
  templateUrl: './library.info.component.html',
  styleUrls: ['./library.info.component.css']
})

export class LibraryInfoComponent implements OnInit {
  @Input() bookData: Book;

  constructor() {}

  ngOnInit() {}
}
