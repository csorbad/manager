import { Book } from '../app/library/interface';
import { UUID } from 'angular2-uuid';

export const books: Book[] = [
  {
    id: UUID.UUID(),
    title: 'Az Éhezők Viadala',
    author: 'Suzanne Collins',
    publisher: 'Agave Könyvek Kiadó Kft.',
  },
  {
    id: UUID.UUID(),
    title: 'Futótűz',
    author: 'Suzanne Collins',
    publisher: 'Agave Könyvek Kiadó Kft.',
  },
  {
    id: UUID.UUID(),
    title: 'A kiválasztott',
    author: 'Suzanne Collins',
    publisher: 'Agave Könyvek Kiadó Kft.',
  }
];
