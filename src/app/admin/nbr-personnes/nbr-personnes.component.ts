import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nbr-personnes',
  templateUrl: './nbr-personnes.component.html',
  styleUrls: ['./nbr-personnes.component.css'],
})
export class NbrPersonnesComponent implements OnInit {
  @Input() nbPer: number;
  @Output() hideEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.hideEvent.emit();
    //this.nbPer = 0;
  }
  callNbList() {}
}
