import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import{ItemService} from './item.service';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers:[ItemService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
