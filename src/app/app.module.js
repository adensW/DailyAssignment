"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item.service");
var addtask_component_1 = require("./addtask.component");
var stickynote_component_1 = require("./stickynote.component");
var todolist_component_1 = require("./todolist.component");
var left_component_1 = require("./left.component");
var leftday_service_1 = require("./leftday.service");
var router_1 = require("@angular/router");
var appRoutes = [
    { path: 'stickynote', component: stickynote_component_1.StickyNoteComponent },
    { path: 'todolist', component: todolist_component_1.TodoListComponent },
    { path: 'left', component: left_component_1.LeftComponent },
    { path: '',
        redirectTo: '/todolist',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes),
            http_1.HttpModule,
        ],
        declarations: [app_component_1.AppComponent,
            addtask_component_1.addtaskComponent,
            todolist_component_1.TodoListComponent,
            stickynote_component_1.StickyNoteComponent,
            left_component_1.LeftComponent,
        ],
        providers: [item_service_1.ItemService, leftday_service_1.LeftDayService],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map