import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private htpp : HttpClient) { }
  getData(){
    return this.htpp.get('https://api.publicapis.org/entries',)
  }

  getOrg(token:any){
    let header = {
      token : token
    }
    return this.htpp.get('',{})
  }

  getUser(orgId:any){
    let header = {
      orgId : orgId
    }
  }

}
