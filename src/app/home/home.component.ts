import { Component, OnInit } from '@angular/core';

import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Common implements OnInit {

  constructor(public router: Router) { 
    super(router);
  }

  ngOnInit() {
  }

}
