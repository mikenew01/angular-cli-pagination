import { Component, OnInit } from '@angular/core';
import Todo from '../models/todo.model';

@Component({
  selector: 'pagination-basic',
  templateUrl: './pagination-basic.component.html',
  styleUrls: ['./pagination-basic.component.scss']
})
export class PaginationBasicComponent implements OnInit {

  constructor() { }

  lista: Array<Todo>;
  config: any;

  ngOnInit(): void {
    this.lista = Array(150).fill(0).map((x, i) => ({id: (i + 1), title:`Item ${i + 1}`}));
    
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.lista.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
