import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy-cow',
  templateUrl: './lazy-cow.component.html',
  styleUrls: ['./lazy-cow.component.scss']
})
export class LazyCowComponent implements OnInit {
  public name: any;

  constructor(
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe(params => {
      this.name = params['name']
    });

  }

  ngOnInit() {
  }

}
