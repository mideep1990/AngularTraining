import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularTraining';
  someJson = {
    test: 'some Value',
    tesr: 'test',
  };

  test = (f1: any) => {
    console.log('come Value');

    return '<div>test</div>';
  };
}
