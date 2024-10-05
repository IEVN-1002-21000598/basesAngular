import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent implements OnInit {
  resistencias_form!:FormGroup;
  message!:string;
  totalpagar!:number;
  color_1:string='';
  color_2:string='';
  color_3:string='';
  tipo_c:string ='';
  valor!:number;
  valor_minimo!:number;
  valor_maximo!:number;
  constructor(){
}

  ngOnInit(): void{
    this.resistencias_form= new FormGroup ({
      color1: new FormControl('', Validators.required),
      color2: new FormControl('', Validators.required),
      color3: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
    })
  }

  calcularResistencia():void{
    const color1 = this.resistencias_form.get('color1')?.value;
    const color2 = this.resistencias_form.get('color2')?.value;
    const color3 = this.resistencias_form.get('color3')?.value;
    const tipo = this.resistencias_form.get('tipo')?.value;
    let tolerancia = 0;

    if(tipo === 'oro'){ tolerancia = 0.05 }
    if(tipo === 'plata'){ tolerancia = 0.1 }

    if(!color1 || !color2 || !color3 || !tipo) {this.message = 'Llena todos los campos'; return;}
    this.message = '';

    const valores = [
      {color:'negro', num: '0'},
      {color:'cafe', num: '1'},
      {color:'rojo', num: '2'},
      {color:'naranja', num: '3'},
      {color:'amarillo', num: '4'},
      {color:'verde', num: '5'},
      {color:'azul', num: '6'},
      {color:'violeta', num: '7'},
      {color:'gris', num: '8'},
      {color:'blanco', num: '9'},
    ];

    const c1 = valores.find((valores) => valores.color === color1);
    const c2 = valores.find((valores) => valores.color === color2);
    const c3 = valores.find((valores) => valores.color === color3);
    let pot = Math.pow(10, parseInt(c3?.num!));
    let sum = (parseInt(c1?.num!) * 10) + parseInt(c2?.num!);
    this.valor = sum * pot;

    this.valor_maximo = this.valor + (this.valor * tolerancia);
    this.valor_minimo = this.valor - (this.valor * tolerancia);


  }
}
