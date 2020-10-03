import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mostrarNome: boolean = true;

  trocar() {
    this.mostrarNome = !this.mostrarNome;
  }
  constructor() {}

  ngOnInit(): void {}
}
