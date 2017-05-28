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
var leftday_1 = require("./leftday");
var leftday_service_1 = require("./leftday.service");
var LeftComponent = (function () {
    function LeftComponent(leftdayService) {
        this.leftdayService = leftdayService;
        this.TotalDay = [];
        this.PassedDay = [];
        this.LeftDays = [];
    }
    LeftComponent.prototype.InitDays = function () {
        var age = 23;
        for (var i = 0; i < 12 * age; i++) {
            var tempDay = new leftday_1.LeftDay(i, false);
            this.PassedDay.push(tempDay);
        }
        for (var j = 0; j < 900 - (12 * age); j++) {
            var tempDay = new leftday_1.LeftDay(j, false);
            this.LeftDays.push(tempDay);
        }
    };
    LeftComponent.prototype.ngOnInit = function () {
        this.InitDays();
    };
    return LeftComponent;
}());
LeftComponent = __decorate([
    core_1.Component({
        selector: 'left',
        templateUrl: './left.component.html',
        styleUrls: ['./left.component.css']
    }),
    __metadata("design:paramtypes", [leftday_service_1.LeftDayService])
], LeftComponent);
exports.LeftComponent = LeftComponent;
//# sourceMappingURL=left.component.js.map