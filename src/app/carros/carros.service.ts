import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor() { }

  getCarros() {

    return ["Serviço","Gol", "Voyage", "Vectra", "Corsa", "Fox", "Onix", "Prisma"];
  }

  getValores() {

    return [19900,28800,15400,8900,9700,13600,42200,55700];
  }
}
