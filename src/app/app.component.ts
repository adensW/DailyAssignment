import { Component,OnInit } from '@angular/core';
import {Item} from './item';
import {ItemService} from './item.service';
import{Injectable} from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<div class='container'>
  <div class='topbar'>
    <div class='title'>{{title}}</div>
    <div class='topline'>
        <div class='leftline'></div>
        <div class='middleline'></div>
        <div class='rightline'></div>
    </div>
</div>
    <nav>
      <a routerLink="/todolist" routerLinkActive="active">todolist</a>
       <a routerLink="/left" routerLinkActive="active">Left</a>
    </nav>
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrls:['./app.component.css'],
})
export class AppComponent {
  title = 'ToDoList';
 
}
