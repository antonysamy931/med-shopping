import { Component, OnInit } from '@angular/core';
import { CommonService } from './Service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private commonservice: CommonService){}

  title = 'app';

  ngOnInit(){
    this.commonservice.GetServiceHostUrl();
  }
}
