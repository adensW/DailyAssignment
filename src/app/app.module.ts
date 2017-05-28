import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import{ItemService} from './item.service';
import{addtaskComponent} from './addtask.component';
import{StickyNoteComponent} from './stickynote.component';
import{TodoListComponent} from './todolist.component';
import{LeftComponent} from './left.component';
import{LeftDayService} from './leftday.service';
import {RouterModule,Routes} from '@angular/router';
const appRoutes:Routes=[
  {path:'stickynote',component:StickyNoteComponent},
  {path:'todolist',component:TodoListComponent},
  {path:'left',component:LeftComponent},
  { path: '',
    redirectTo: '/todolist',
    pathMatch: 'full'
  },
];
@NgModule({
  imports:      [ BrowserModule,
  FormsModule,
  RouterModule.forRoot(appRoutes)
   ],
  declarations: [ AppComponent,
  addtaskComponent,
  TodoListComponent,
  StickyNoteComponent,
  LeftComponent,
  
  ],
  providers:[ItemService,LeftDayService],
  
  bootstrap:    [ AppComponent ],
 
})
export class AppModule { }
