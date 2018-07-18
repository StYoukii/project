import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/event').subscribe(data => {
      this.events = data;
    });
  }

}
