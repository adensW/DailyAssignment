import { Component,OnInit } from '@angular/core';
import {Item} from './item';
import {ItemService} from './item.service';
@Component({
    selector:'add-task',
    templateUrl:'./addtask.component.html'
})
export class addtaskComponent{
    constructor(
    private itemService:ItemService
    ){}
    items :Item[];
    tempitem = new Item;
    clickMessage='';
    add():void{
        this.itemService.setItem(this.tempitem);
        this.clickMessage=JSON.stringify(this.tempitem);
 }
}