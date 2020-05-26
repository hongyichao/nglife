import { Component } from '@angular/core';
import { Book } from './SharedModels/book';
import { BookFilterParams } from './SharedModels/book-filter-params';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookToSearch: string;
  bookFilterParams: BookFilterParams;
  selectedMethod: string;
  books: Book[] = [
    {Title: 'AngularJS', Author: 'Lucas'}, {Title: 'Angular 2', Author: 'Terry'}, {Title: 'Angular 3', Author: 'Michael'},
    {Title: 'Angular 4', Author: 'Lucas'}, {Title: 'Angular 5', Author: 'Terry'}, {Title: 'Angular 6', Author: 'John'},
    {Title: 'Angular 7', Author: 'Alen'}, {Title: 'Angular 8', Author: 'John'}, {Title: 'Angular 7', Author: 'Michael'},
    {Title: 'ReactJS', Author: 'Lucas'},
    {Title: 'Vu.js', Author: 'Hongyi'},
    {Title: 'jQuery', Author: 'Hongyi'},
    {Title: 'Html: new to professional', Author: 'Hongyi'},
    {Title: 'CSS rocks!', Author: 'Hongyi'}
];

  constructor() {
    this.bookToSearch = '';
    this.bookFilterParams = {SelectedMethod: 'Title'};
  }
}
