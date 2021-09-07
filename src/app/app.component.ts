declare var require: any
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

  }

  ngOnInit(){
    
  }

  title = 'AngularTraining';
  someVal = "";

  test = (f1: any) => {
    return '<div>test</div>';
  };

  message(name:string){
    alert("I am in");
    this.someVal = "I am sending Data to template by "+name;
  }

  
}
