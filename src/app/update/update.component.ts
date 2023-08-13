import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { datamodel } from '../admission/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public dataid!:number;
  public admission!:datamodel;
  constructor(private activetedroute:ActivatedRoute,private router:Router,private api:ApiService){}
  ngOnInit(): void {
    this.activetedroute.paramMap.subscribe((param:Params)=>{
      this.dataid=param['get']("id");
      //console.log("data id is",this.dataid)
    })
    this.api.fetchdata(this.dataid).subscribe((data:datamodel)=>{
      this.admission = data;
    })
    
    }
    update(){
      this.api.updatetime(this.admission,this.dataid).subscribe((res:datamodel)=>{
      this.router.navigate(["/"])
    })
    }
    
  }


