import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    $(document).ready(function(){      
      $('#chatlogo').click(function(){
        Chat();
      });
      $('#CloneBtn').click(function(){
        Chat();
      });
    });  

    function Chat(){
      if($('#chatlogo').hasClass('active')){
        $('#chatlogo').removeClass('active');
        $('#chatcontainer').fadeOut();
        $('#chatcontainer').fadeOut('slow');
        $('#chatcontainer').fadeOut(3000);
      }else{
        $('#chatlogo').addClass('active');
        $('#chatcontainer').fadeIn();
        $('#chatcontainer').fadeIn('slow');
        $('#chatcontainer').fadeIn(3000);
      }  
    }
  }

}
