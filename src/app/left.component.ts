import { Component ,OnInit } from '@angular/core';
import{LeftDay} from './leftday'; 
import{LeftDayService} from './leftday.service';
@Component({
   selector:'left',
   templateUrl:'./left.component.html',
   styleUrls:['./left.component.css']
})
export class LeftComponent implements OnInit{
    TotalDay:Array<LeftDay>=[];
    PassedDay:Array<LeftDay>=[];
    LeftDays:Array<LeftDay>=[];
      constructor(
        private leftdayService:LeftDayService
    ){}
    InitDays():void{
        var age=23;
        for(var i=0;i<12*age;i++){
            var tempDay =new LeftDay(i,false);
            this.PassedDay.push(tempDay);
        }
        for (var j = 0;j<900-(12*age);j++){
            var tempDay =new LeftDay(j,false);
            this.LeftDays.push(tempDay);
        }
    }
    ngOnInit():void{
        this.InitDays();
    }
}