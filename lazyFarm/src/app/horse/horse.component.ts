import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent implements OnInit {
  public name: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // http://localhost:4200/horse?name=Johnny
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

}
