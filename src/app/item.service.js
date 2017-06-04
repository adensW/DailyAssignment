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
var mock_items_1 = require("./mock-items");
var http_1 = require("@angular/http");
// import { Observable } from 'rxjs/Observable';
require("rxjs/add/operator/toPromise");
var core_1 = require("@angular/core");
var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        // private url = 'data/todolistdata.json'
        this.url = 'api/items';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    // getItems():Promise<Item[]>{
    //     return Promise.resolve(ITEMS);
    // }
    ItemService.prototype.getItems = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ItemService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ItemService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ItemService.prototype.setItem = function (item) {
        mock_items_1.ITEMS.push(item);
    };
    // update(item: Item): Promise<Item> {
    //     const url = `${this.url}/${item.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(item))
    //         .toPromise()
    //         .then(() => item)
    //         .catch(this.handleError);
    // }
    ItemService.prototype.create = function (item) {
        return this.http
            .post(this.url, JSON.stringify({ item: item }))
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
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
    ItemService.prototype.getOneItem = function (index) {
        return mock_items_1.ITEMS[index];
    };
    ItemService.prototype.getItemsLength = function () {
        return mock_items_1.ITEMS.length;
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map