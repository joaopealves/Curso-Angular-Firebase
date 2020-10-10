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
    const valorInput = form.value.valor;

    if (valorInput >= 5000) {
      this.resposta = valorInput - valorInput * 0.1;
    } else {
      this.resposta = valorInput - valorInput * 0.05;
    }
    this.verifica = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
