import {Item} from './item';
import{ITEMS} from './mock-items';
import { Http, Response }          from '@angular/http';
import{Injectable} from '@angular/core';
@Injectable()
export class ItemService{
    getItems():Promise<Item[]>{
        return Promise.resolve(ITEMS);
    }
    setItem(item:Item):void{
        ITEMS.push(item);
    }
    deleteItem(item:Item):void{
        
        var tempITEMS = ITEMS;
        for(var i =0;i<tempITEMS.length;i++){
            if(tempITEMS[i]==item){
                ITEMS.splice(i,1);
            }
        }
    }
    cancelItem():void{
        ITEMS.pop();
    }
}