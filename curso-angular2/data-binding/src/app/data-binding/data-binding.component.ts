import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://erpeasy.compels.net'
  cursoAngular: boolean = true;
  urlImage : string = 'http://lorempixel.com/400/200/';

  getCurtirCurso(): boolean {
    return true;
  }

  getValor(): number {
    return 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
