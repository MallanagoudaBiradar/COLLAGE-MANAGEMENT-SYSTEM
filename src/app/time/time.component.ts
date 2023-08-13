import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ApiService } from '../api/api.service';
import { datamodel } from './model';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  timeform!:FormGroup;
  data:undefined|datamodel[];
  constructor(private formbuilder:FormBuilder , private api:ApiService){}

  ngOnInit(): void {
    this.timeform=this.formbuilder.group({
      time:['',Validators.required],
      monday:['',Validators.required],
      tuesday:['',Validators.required],
      wednesday:['',Validators.required],
      thursday:['',Validators.required],
      friday:['',Validators.required],
      saturday:['',Validators.required],
    })
    this.gettime();
  }

  addtime(data:datamodel){
   // console.log(data)
   this.api.addtime(data).subscribe((res=>{
    this.timeform.reset();
   }))
  }

  gettime(){
    this.api.gettime().subscribe((res=>{
      this.data=res;
    }))
  }

}
