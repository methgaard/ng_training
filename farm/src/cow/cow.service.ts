import { Injectable } from '@angular/core';

@Injectable()
export class CowService {
  private callCount = 0;
  constructor() { }

  public getName = () => "My name is Bent " + ++this.callCount

}
