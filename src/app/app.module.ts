import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import{ItemService} from './item.service';
@NgModule({
  imports:      [ BrowserModule,
  FormsModule
   ],
  declarations: [ AppComponent ],
  providers:[ItemService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
