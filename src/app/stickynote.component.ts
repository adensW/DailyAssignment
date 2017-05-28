import { Component } from '@angular/core';
import{AppComponent} from './app.component';

@Component({
   selector:'stickynote',
   template:'<h1>StickyNote</h1>'
})
export class StickyNoteComponent{
    private appComponent :AppComponent;
}