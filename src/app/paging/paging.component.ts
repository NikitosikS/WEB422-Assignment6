import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() page: number;

  @Output() newPage = new EventEmitter();

  constructor() { }

  previousPageButton() {
    if (this.page > 1) {
      this.newPage.emit(this.page - 1);
    }
  }
  
  nextPageButton() {
    this.newPage.emit(this.page + 1);
  }

  ngOnInit(): void {
  }

}