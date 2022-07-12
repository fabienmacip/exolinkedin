import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  public date = new Date();

  constructor() { }

  getDate() {
    return new Date();
  }
}
