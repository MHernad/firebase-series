import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Datos from 'src/app/interfaces/datos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  readonly ROOT_URL = "https://apis.datos.gob.ar/series/api/series/?ids=temp_max_sazb"

  constructor(private http: HttpClient, private router: Router) {
    this.rows = []
   }

  headers = ["Día", "Temperatura"]

  rows: Datos[]

  ngOnInit(): void {
    this.http.get(this.ROOT_URL).subscribe(
      (response: any) => {
        for (let index = 0; index < response.data.length; index++) {
          let d = {
            "Dia": response.data[index][0],
            "Temperatura": response.data[index][1]
          }
          this.rows.push(d)
        }
        console.log(this.rows);
        
      },
      error => {
        console.log(error.message);
      }
    )
  }
}




