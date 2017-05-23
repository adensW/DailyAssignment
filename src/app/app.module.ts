import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import{ItemService} from './item.service';
import{addtaskComponent} from './addtask.component';
@NgModule({
  imports:      [ BrowserModule,
  FormsModule
   ],
  declarations: [ AppComponent,
  addtaskComponent
  ],
  providers:[ItemService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
