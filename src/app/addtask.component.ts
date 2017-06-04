import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';
import { TodoListComponent } from './todolist.component';
@Component({
    selector: 'add-task',
    templateUrl: './addtask.component.html',
    styleUrls: ['./addtask.component.css']
})
export class addtaskComponent {
    constructor(
        private itemService: ItemService,
        private todoListComponent: TodoListComponent
    ) { }
    items: Item[];
    tempitem = new Item;
    priorities = [1, 2, 3, 4, 5];
    clickMessage = '';
    add(): void {
        this.tempitem.id = 1;
        this.tempitem.startTime = new Date();
        this.tempitem.endTime = new Date(this.tempitem.endTime);
        this.todoListComponent.addtaskComplete();
        this.itemService.create(this.tempitem);
        this.clickMessage = JSON.stringify(this.tempitem);
    }
    // add():void{
    //     this.tempitem.id = 1;
    //     this.tempitem.startTime = new Date();
    //     this.tempitem.endTime = new Date(this.tempitem.endTime);
    //     this.todoListComponent.addtaskComplete();
    //     this.itemService.update(this.tempitem);
    
    // }
    cancel(): void {
        this.todoListComponent.cancel();
    }
}