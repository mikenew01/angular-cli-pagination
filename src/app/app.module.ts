import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './reducer/todo.reducer';
import { PaginationBasicComponent } from './pagination-basic/pagination-basic.component';
import { PaginationCustomComponent } from './pagination-custom/pagination-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PaginationBasicComponent,
    PaginationCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    StoreModule.forRoot({todos: todoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
