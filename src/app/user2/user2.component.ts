import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateService } from '../service/date.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  userForm = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl('')
    }
  );
  userInput = new FormControl('hello');


  constructor(public dateService: DateService) {

  }

  ngOnInit(): void {
    //this.dateService.date;
  }

  showForm(): void {
    console.log(this.userForm.value)
  }

}
