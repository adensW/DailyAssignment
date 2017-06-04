import { Item } from './item';
import { ITEMS } from './mock-items';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
@Injectable()
export class ItemService {
    // private url = 'data/todolistdata.json'
    private url = 'api/items'
    constructor(private http: Http) { }
    // getItems():Promise<Item[]>{
    //     return Promise.resolve(ITEMS);
    // }
    getItems(): Promise<Item[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().data as Item[])
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();

        return body.data || {};
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    setItem(item: Item): void {
        ITEMS.push(item);
    }
    private headers = new Headers({ 'Content-Type': 'application/json' });
    // update(item: Item): Promise<Item> {
    //     const url = `${this.url}/${item.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(item))
    //         .toPromise()
    //         .then(() => item)
    //         .catch(this.handleError);
    // }
    create(item:Item): Promise<Item> {
        return this.http
            .post(this.url, JSON.stringify({ item: item }))
            .toPromise()
            .then(res => res.json().data as Item)
            .catch(this.handleError);
    }
    deleteItem(item: Item): void {

        var tempITEMS = ITEMS;
        for (var i = 0; i < tempITEMS.length; i++) {
            if (tempITEMS[i] == item) {
                ITEMS.splice(i, 1);
            }
        }
    }
    cancelItem(): void {
        ITEMS.pop();
    }
    getOneItem(index: number): Item {
        return ITEMS[index];
    }
    getItemsLength(): number {
        return ITEMS.length;
    }
}