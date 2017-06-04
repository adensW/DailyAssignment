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
var item_service_1 = require("./item.service");
var TodoListComponent = (function () {
    function TodoListComponent(itemService) {
        this.itemService = itemService;
        this.title = 'ToDoList';
        this.testMessage = '';
        this.errorMessage = '';
    }
    TodoListComponent.prototype.getItems = function () {
        var _this = this;
        // this.itemService.getItems();
        this.itemService.getItems().then(function (Items) { return _this.items = Items; });
    };
    TodoListComponent.prototype.ngOnInit = function () {
        this.getItems();
        for (var i = 0; i < this.itemService.getItemsLength(); i++) {
            this.testMessage = this.checkTimeover(this.itemService.getOneItem(i)).toString();
        }
    };
    TodoListComponent.prototype.addTask = function () {
        // var item=new Item;
        // this.itemService.setItem(item);
        this.added = true;
    };
    TodoListComponent.prototype.addtaskComplete = function () {
        this.added = false;
    };
    TodoListComponent.prototype.deleteItem = function (item) {
        this.itemService.deleteItem(item);
    };
    TodoListComponent.prototype.cancel = function () {
        this.added = false;
    };
    TodoListComponent.prototype.inputItem = function (event) {
        // this.testMessage= (<HTMLInputElement>event.target).value;
        // (<HTMLInputElement>event.target).readOnly=false;
        event.readOnly = false;
    };
    TodoListComponent.prototype.checkTimeover = function (item) {
        var now = new Date();
        if (now > item.endTime) {
            return true;
        }
        return false;
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    core_1.Component({
        selector: 'todolist',
        templateUrl: './todolist.component.html',
        styleUrls: ['./todolist.component.css']
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todolist.component.js.map