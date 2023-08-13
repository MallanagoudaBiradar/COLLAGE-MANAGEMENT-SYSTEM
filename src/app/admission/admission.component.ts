import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ApiService } from '../api/api.service';
import { datamodel } from 'src/app/admission/model';
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  admissionform!:FormGroup;
  data:undefined|datamodel[];
  constructor(private formbuilder:FormBuilder , private api:ApiService){}

  ngOnInit(): void {
    this.admissionform=this.formbuilder.group({
      studentname:['',Validators.required],
      fathername:['',Validators.required],
      mothername:['',Validators.required],
      dob:['',Validators.required],
      address:['',Validators.required],
      gender:['',Validators.required],
      course:['',Validators.required],
      email:['',Validators.required],
      mobilenumber:['',Validators.required]
    })
    this.gettime();
  }

  addtime(data:datamodel){
   // console.log(data)
   this.api.addtime(data).subscribe((res=>{
    this.admissionform.reset();
   }))
  }

  gettime(){
    this.api.gettime().subscribe((res=>{
      this.data=res;
    }))
  }

}
