import { Component, OnInit } from '@angular/core';
import { CowService } from './cow.service';

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.scss'],


})
export class CowComponent implements OnInit {
  cowGreeting: string;

  constructor(
    private cowService: CowService
  ) {

    this.cowGreeting = this.cowService.getName();
  }

  ngOnInit() {
  }

}
