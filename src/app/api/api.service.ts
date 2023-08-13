import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from 'src/app/admission/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addtime(data:datamodel){
    return this.http.post<datamodel>("http://localhost:3000/posts",data)
  }

  gettime(){
    return this.http.get<datamodel[]>("http://localhost:3000/posts");
  }
  fetchdata(id:number){
    return this.http.get<datamodel>("http://localhost:3000/posts"+id);
  }
  updatetime(data:datamodel,id:number){
    return this.http.put<datamodel>("http://localhost:3000/posts"+id,data);
  }
}
