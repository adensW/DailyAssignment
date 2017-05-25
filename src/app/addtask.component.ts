import { Component,OnInit } from '@angular/core';
import {Item} from './item';
import {ItemService} from './item.service';
import{AppComponent} from './app.component';
@Component({
    selector:'add-task',
    templateUrl:'./addtask.component.html',
    styleUrls:['./addtask.component.css']
})
export class addtaskComponent{
    constructor(
    private itemService:ItemService,
    private appcomponent:AppComponent
    ){}
    items :Item[];
    tempitem = new Item;
    
    clickMessage='';
    add():void{
        this.tempitem.id=1;
        this.tempitem.startTime=new Date();
        this.tempitem.endTime=new Date(this.tempitem.endTime);
        this.appcomponent.addtaskComplete();
        this.itemService.setItem(this.tempitem);
        this.clickMessage=JSON.stringify(this.tempitem);
 }
 cancel():void{
    this.appcomponent.cancel();
 }
}