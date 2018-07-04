import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public eventName: string;
  public eventCity: string;
  public eventAdress: string;
  public usersLimit: number;


  constructor() { }

  ngOnInit() {
  }

}
