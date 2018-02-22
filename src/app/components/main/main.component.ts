import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  toogleSidebar(){
   // $("#sidebar-wrapper").css('height',($("#sidebar-wrapper").height()+34)+'px');
      $("#wrapper").toggleClass("toggled");
  }
  constructor() { }

  ngOnInit() {
  }

}
