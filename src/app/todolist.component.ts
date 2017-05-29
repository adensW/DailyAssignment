import { Component,OnInit } from '@angular/core';
import {Item} from './item';
import {ItemService} from './item.service';
@Component({
  selector: 'todolist',
  templateUrl:'./todolist.component.html' ,
  styleUrls:['./todolist.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'ToDoList';
  items :Item[];
  added:boolean;
  testMessage='';
  constructor(
    private itemService:ItemService
  ){}
  
  getItems():void{
    // this.itemService.getItems();
    this.itemService.getItems().then(Items=>this.items=Items)
  }
  ngOnInit(): void {
    this.getItems();
  }
  addTask():void{    
    // var item=new Item;
    // this.itemService.setItem(item);
    this.added=true;
  }
  addtaskComplete():void{
    this.added=false;
  }
  deleteItem(item:Item):void{
    this.itemService.deleteItem(item);
  }
  cancel():void{
    this.added=false;
  }
  inputItem(event:HTMLInputElement){
    // this.testMessage= (<HTMLInputElement>event.target).value;
    // (<HTMLInputElement>event.target).readOnly=false;
    event.readOnly=false;
  }
}
