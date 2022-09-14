import { Component, OnInit } from '@angular/core';
import { CarrosService } from './carros.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {

  carros1: string[]  = ["Variável","Fox","Vectra","Onix","Gol", "Palio","Porshe"];
  valores1: number[] = [19900,28800,15400,8900,9700,13600,42200,55700];

  carros2: string[]  = [];
  valores2: number[] = [];

  constructor(private carrosService: CarrosService) {

    this.carros2  = this.carrosService.getCarros();
    this.valores2 = this.carrosService.getValores();
   }

  ngOnInit(): void {
  }

}
