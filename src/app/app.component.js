"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ToDoList';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class='topbar'>\n    <div class='title'>{{title}}</div>\n    <div class='topline'>\n        <div class='leftline'></div>\n        <div class='middleline'></div>\n        <div class='rightline'></div>\n    </div>\n</div>\n    <nav>\n      <a routerLink=\"/todolist\" routerLinkActive=\"active\">todolist</a>\n       <a routerLink=\"/left\" routerLinkActive=\"active\">Left</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map