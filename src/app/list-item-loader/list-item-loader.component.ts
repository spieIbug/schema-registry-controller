import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item-loader',
  templateUrl: './list-item-loader.component.html',
  styleUrls: ['./list-item-loader.component.css']
})
export class ListItemLoaderComponent implements OnInit {

  @Input()
  elementsToDisplay = 0;
  elementsArray = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.elementsToDisplay; i++) {
      this.elementsArray.push(i);
    }
  }

}
