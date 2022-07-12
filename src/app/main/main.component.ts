import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  date = new Date();

  color = false;

  user = "Elise";

  elements=[41,42,33,6];

  constructor() { }

  ngOnInit(): void {
  }

  userClick(){
    console.log("cliqué")
  }

}
