import { Injectable } from '@angular/core';
import { HttpClient,HttpXhrBackend } from '@angular/common/http';

/*
@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class TestservService {

  constructor(private http:HttpClient) { }


  //Non DI Approach
  /*getData()
  {
    const httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
    let url = "https://api.publicapis.org/entries?category=science";
    return httpClient.get(url);
  }*/

  //DI Approach
  getData()
  {
    let url = "https://api.publicapis.org/entries?category=science";
    return this.http.get(url);
  }

  someFunc(val:string)
  {
    console.log("Testing Service Injection - " + val);
  }
}
