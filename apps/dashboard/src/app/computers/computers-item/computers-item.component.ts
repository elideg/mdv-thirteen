import { ComputersFacade } from '@mdv-thirteen/core-state';
import { Computer } from '@mdv-thirteen/core-data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'mdv-thirteen-computers-item',
  templateUrl: './computers-item.component.html',
  styleUrls: ['./computers-item.component.scss']
})
export class ComputersItemComponent implements OnInit {
  computers$: Observable<Computer>;

  constructor(
    private route: ActivatedRoute,
    private computersFacade: ComputersFacade
  ) { }

  ngOnInit() {
    this.computersFacade.loadComputers();
    this.route.params.subscribe((param) => this.computersFacade.selectComputer(param['id']));
    this.computers$ = this.computersFacade.selectedComputer$
  }

}
