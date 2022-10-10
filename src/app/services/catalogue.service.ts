import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host_ms_product:string = "http://localhost:8081"
  constructor(private http:HttpClient,private authenticationService:AuthenticationService) { }

  getAllCategories(){
    return this.http.get(this.host_ms_product+"/categories")
  }
  getRessource(url){
    return this.http.get(url)
  }
  deleteRessource(url){
    let headers=new HttpHeaders({'authorization':"Bearer "+this.authenticationService.jwt})
    return this.http.delete(url,{headers:headers})
  }
  postRessource(url,data){
    let headers=new HttpHeaders({'authorization':"Bearer "+this.authenticationService.jwt})
    return this.http.post(url,data,{headers:headers})
  }
  updateRessource(url,data){
    let headers=new HttpHeaders({'authorization':"Bearer "+this.authenticationService.jwt})
    return this.http.patch(url,data,{headers:headers})
  }
}
