import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component implements OnInit {
  resposta: any;
  verifica = false;
  setValor(form: NgForm) {
    console.log('calculando form.value.valor');
    this.resposta = form.value.valor - form.value.valor * 0.05;
    this.verifica = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
