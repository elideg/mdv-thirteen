import { Computer } from '@mdv-thirteen/core-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mdv-thirteen-computers-list',
  templateUrl: './computers-list.component.html',
  styleUrls: ['./computers-list.component.scss']
})
export class ComputersListComponent implements OnInit {


  @Input() computers: Computer[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(computer: Computer) {
    this.selected.emit(computer);
  }

  delete(computer: Computer) {
    this.deleted.emit(computer);
  }
}
