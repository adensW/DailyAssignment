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
  tempitem = new Item;
  
  addTask():void{
     
     

     this.tempitem.id=11;
     this.tempitem.priority=2;
     this.tempitem.todo='test';
     this.clickMessage = JSON.stringify(this.tempitem);
    //  this.items.push(this.tempitem);
  }
}
