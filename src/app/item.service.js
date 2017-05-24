"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mock_items_1 = require("./mock-items");
var core_1 = require("@angular/core");
var ItemService = (function () {
    function ItemService() {
    }
    ItemService.prototype.getItems = function () {
        return Promise.resolve(mock_items_1.ITEMS);
    };
    ItemService.prototype.setItem = function (item) {
        mock_items_1.ITEMS.push(item);
    };
    ItemService.prototype.deleteItem = function (item) {
        var tempITEMS = mock_items_1.ITEMS;
        for (var i = 0; i < tempITEMS.length; i++) {
            if (tempITEMS[i] == item) {
                mock_items_1.ITEMS.splice(i, 1);
            }
        }
    };
    ItemService.prototype.cancelItem = function () {
        mock_items_1.ITEMS.pop();
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable()
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map