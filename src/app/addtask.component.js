"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var item_1 = require("./item");
var item_service_1 = require("./item.service");
var todolist_component_1 = require("./todolist.component");
var addtaskComponent = (function () {
    function addtaskComponent(itemService, todoListComponent) {
        this.itemService = itemService;
        this.todoListComponent = todoListComponent;
        this.tempitem = new item_1.Item;
        this.priorities = [1, 2, 3, 4, 5];
        this.clickMessage = '';
    }
    addtaskComponent.prototype.add = function () {
        this.tempitem.id = 1;
        this.tempitem.startTime = new Date();
        this.tempitem.endTime = new Date(this.tempitem.endTime);
        this.todoListComponent.addtaskComplete();
        this.itemService.create(this.tempitem);
        this.clickMessage = JSON.stringify(this.tempitem);
    };
    // add():void{
    //     this.tempitem.id = 1;
    //     this.tempitem.startTime = new Date();
    //     this.tempitem.endTime = new Date(this.tempitem.endTime);
    //     this.todoListComponent.addtaskComplete();
    //     this.itemService.update(this.tempitem);
    // }
    addtaskComponent.prototype.cancel = function () {
        this.todoListComponent.cancel();
    };
    return addtaskComponent;
}());
addtaskComponent = __decorate([
    core_1.Component({
        selector: 'add-task',
        templateUrl: './addtask.component.html',
        styleUrls: ['./addtask.component.css']
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        todolist_component_1.TodoListComponent])
], addtaskComponent);
exports.addtaskComponent = addtaskComponent;
//# sourceMappingURL=addtask.component.js.map