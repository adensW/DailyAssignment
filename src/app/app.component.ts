import { Component,OnInit } from '@angular/core';
import {Item} from './item';
import {ItemService} from './item.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDoList';
  items :Item[];
  constructor(
    private itemService:ItemService
  ){}
  
  getItems():void{
    this.itemService.getItems().then(Items=>this.items=Items)
  }
  ngOnInit(): void {
    this.getItems();
  }
  clickMessage = '';
  addTask():void{
     this.clickMessage = 'You are my hero!';
  }
}
