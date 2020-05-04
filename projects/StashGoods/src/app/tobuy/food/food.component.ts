import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() count: number;
  constructor() { }

  ngOnInit() {
  }

}
