import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  @Input() count: string;
  constructor() { }

  ngOnInit() {
  }

}
