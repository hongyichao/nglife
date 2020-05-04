import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tobuy',
  templateUrl: './tobuy.component.html',
  styleUrls: ['./tobuy.component.css']
})
export class TobuyComponent implements OnInit {
  @Output() importFoodEvent = new EventEmitter<number>();
  @Output() importComputerEvent = new EventEmitter<number>();
  count = 0;
  foodCount = 0;
  computerCount = 0;
  foodList: number[] = [];
  computerList: number[] = [];
  interval;
  constructor() { }

  ngOnInit() {
  }

  startImport() {
    this.interval = setInterval(() => {
      this.count++;
      if (this.count % 2 === 0) {
        this.foodCount++;
        this.foodList.push(this.foodCount);
        this.importFoodEvent.emit(this.foodCount);
      } else {
        this.computerCount++;
        this.computerList.push(this.computerCount);
        this.importComputerEvent.emit(this.computerCount);
      }

    }, 2000);
  }

  pauseImport() {
    clearInterval(this.interval);
  }
}
