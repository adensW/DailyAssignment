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
var AppComponent = (function () {
    function AppComponent(itemService) {
        this.itemService = itemService;
        this.title = 'ToDoList';
        this.clickMessage = '';
        this.tempitem = new item_1.Item;
    }
    AppComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems().then(function (Items) { return _this.items = Items; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    AppComponent.prototype.addTask = function () {
        this.tempitem.id = 11;
        this.tempitem.priority = 2;
        this.tempitem.todo = 'test';
        this.clickMessage = JSON.stringify(this.tempitem);
        //  this.items.push(this.tempitem);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map