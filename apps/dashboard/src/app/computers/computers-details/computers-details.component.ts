import { Computer } from '@mdv-thirteen/core-data';
import { FormGroup, NgForm, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'mdv-thirteen-computers-details',
  templateUrl: './computers-details.component.html',
  styleUrls: ['./computers-details.component.scss']
})
export class ComputersDetailsComponent implements OnInit {
  originalTitle;
  currentComputer: Computer

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set computer(value) {
    if (value) this.originalTitle = value.title;
      this.currentComputer = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(computer: Computer) {
    this.saved.emit(computer);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
