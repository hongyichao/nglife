import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookToSearch: string;
  books: string[] = ['AngularJS', 'Angular2', 'Angular3', 'Angular4', 'Angular5', 'Angular6', 'Angular7', 'Angular8', 'Angular9',
  'ReactJS', 'Vu.js', 'jQuery', 'Html: new to professional', 'CSS rocks!'
];

  constructor() {
    this.bookToSearch = '';
  }
}
