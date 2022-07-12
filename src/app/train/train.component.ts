import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  trainData: any;

  // API - transport.opendata.ch

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève')
    .subscribe(
      (valueDeRetour) => {
        this.trainData = valueDeRetour
      }
    )
  }

}
