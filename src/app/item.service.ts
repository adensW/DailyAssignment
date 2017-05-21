import {Item} from './item';
import{ITEMS} from './mock-items';

import{Injectable} from '@angular/core';
@Injectable()
export class ItemService{
    getItems():Promise<Item[]>{
        return Promise.resolve(ITEMS);
    }
}