import { Component, OnInit } from '@angular/core';
import { CowService } from 'src/cow/cow.service';

@Component({
  selector: 'app-pig',
  templateUrl: './pig.component.html',
  styleUrls: ['./pig.component.scss'],

})
export class PigComponent implements OnInit {
  public pigGreeting: string;

  constructor(
    private cowService: CowService
  ) {
    this.pigGreeting = this.cowService.getName();

  }

  ngOnInit() {
  }

}
