import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

import * as $ from 'jquery';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-med-nav',
  templateUrl: './med-nav.component.html',
  styleUrls: ['./med-nav.component.css']
})
export class MedNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,
    private matDialog: MatDialog) {}
    
  ngOnInit(){
    $(window).resize(function(){
      var middleHeight = $(window).height() - ($('footer').height() + $('nav').height());
      $('#middle-container').css({'min-height': middleHeight});
    });

    $(document).ready(function (){
      var middleHeight = $(window).height() - ($('footer').height() + $('nav').height());
      $('#middle-container').css({'min-height': middleHeight});
      $('ul.navbar-nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      });
    });
  }

  ShowLoginModel(): void{
    const dialogRef = this.matDialog.open(LoginComponent,
                      {
                        width: "75%",
                        data: { isDialog : true}
                      });
    dialogRef.afterClosed().subscribe(result =>{      
    });
  }

}