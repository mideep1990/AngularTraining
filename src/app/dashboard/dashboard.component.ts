import { Component, OnInit } from '@angular/core';
import { TestservService } from '../services/testserv.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  someSciData : any = null;
  constructor(private testserv:TestservService) { 
  }

  ngOnInit(): void {
  }

  getAllScienceData()
  {
    this.testserv.getData().subscribe((res) => { 
      console.log("Some",res);
      this.someSciData = res["entries"];
      console.log("Some1",this.someSciData);
  });
  }

}
