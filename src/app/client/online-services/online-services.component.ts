import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-online-services',
  templateUrl: './online-services.component.html',
  styleUrls: ['./online-services.component.css'],
})
export class OnlineServicesComponent implements OnInit {
  public type: string;
  constructor() {}

  ngOnInit(): void {}
  naissance() {
    this.type = 'naissance';
    console.log(this.type);
  }
}
