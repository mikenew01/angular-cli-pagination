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
    this.lista = [
      {id: 1, title: 'Testando 1', isCompleted: true},
      {id: 2, title: 'Testando 2', isCompleted: true},
      {id: 3, title: 'Testando 3', isCompleted: true},
      {id: 4, title: 'Testando 4', isCompleted: true},
      {id: 5, title: 'Testando 5', isCompleted: true},
      {id: 6, title: 'Testando 6', isCompleted: true},
      {id: 7, title: 'Testando 7', isCompleted: true},
      {id: 8, title: 'Testando 8', isCompleted: true},
      {id: 9, title: 'Testando 9', isCompleted: true},
      {id: 10, title: 'Testando 10', isCompleted: true},
      {id: 11, title: 'Testando 11', isCompleted: true}
    ];
    
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
