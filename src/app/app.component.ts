import { Component } from '@angular/core';
import { UtilComponent } from './util/util.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private commonUtil:UtilComponent){
  }
  page:string='login';

  setPage(page:string){
    console.log(page)
    this.page = page;
  }

  getPage():string{
    return this.page;
  }
}
