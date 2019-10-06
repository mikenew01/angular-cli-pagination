import { Component, OnInit } from '@angular/core';
import Todo from '../models/todo.model';

@Component({
  selector: 'pagination-custom',
  templateUrl: './pagination-custom.component.html',
  styleUrls: ['./pagination-custom.component.scss']
})
export class PaginationCustomComponent implements OnInit {

  constructor() { }

  lista: Array<Todo>;
  config: any;

  ngOnInit(): void {
    this.lista = Array(150).fill(0).map((x, i) => ({id: (i + 1), title:`Item ${i + 1}`}));
    
    this.config = {
      id: 'custom',
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.lista.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
