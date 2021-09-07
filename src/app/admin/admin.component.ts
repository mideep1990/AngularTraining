import { Component, OnInit } from '@angular/core';
import { TestservService } from '../services/testserv.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  someSciData:any = null;
  constructor(private testServ:TestservService) { }

  ngOnInit(): void {
  }

  //Non DI Approach
  /*getHTTPData()
  {
    this.Testserv = new TestservService();
    this.Testserv.getData().subscribe((res) => { 
      this.someSciData = res.entries;
      console.log("Some1",this.someSciData);
  });
  }*/

  //DI Approach
  getHTTPData()
  {
    this.testServ.getData().subscribe((res) => { 
      this.someSciData = res["entries"];
      console.log("Some1",this.someSciData);
  });
  }

}
