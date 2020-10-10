import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repete',
  templateUrl: './repete.component.html',
  styleUrls: ['./repete.component.css'],
})
export class RepeteComponent implements OnInit {
  numeros: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit(): void {}
}
