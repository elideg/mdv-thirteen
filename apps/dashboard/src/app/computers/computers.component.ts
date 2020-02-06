import { ComputersFacade } from '@mdv-thirteen/core-state';
import { Component, OnInit } from '@angular/core';
import { Computer, ComputerService } from '@mdv-thirteen/core-data';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'mdv-thirteen-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
  form: FormGroup;
  selectedComputer$: Observable<Computer> = this.computersFacade.selectedComputer$;
  computers$: Observable<Computer[]> = this.computersFacade.allComputers$;

  constructor(
    private fb: FormBuilder,
    private computersFacade: ComputersFacade
    ) { }

  ngOnInit() {
    this.initForm();
    this.computersFacade.loadComputers();
    this.selectComputer({ id: null } as Computer);
  }

  selectComputer(computer: Computer) {
    this.form.patchValue(computer);
    this.computersFacade.selectComputer(computer.id);
  }

  cancel() {
    this.selectComputer({ id: null } as Computer);
    this.form.reset();
  }

  saveComputer(formDirective: FormGroupDirective) {
    if(this.form.invalid) return;
    if(this.form.value.id) {
      this.computersFacade.updateComputer(this.form.value);
    } else {
      this.computersFacade.createComputer(this.form.value);
    }
  }

  deleteComputer(computer: Computer) {
    this.computersFacade.deleteComputer(computer);
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      coolLevel: [''],
      approved: ['']
    })
  }

}
