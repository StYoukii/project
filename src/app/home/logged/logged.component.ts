import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openSidebar() {
    $('.sidebar').addClass('open');
  }

  closeSidebar() {
    $('.sidebar').removeClass('open');
  }
}


