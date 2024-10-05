import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent implements OnInit{
  cinepolis_form!:FormGroup;
  message!:string;
  totalpagar!:number;

  constructor(){}

  ngOnInit(): void{
    this.cinepolis_form= new FormGroup ({
      nombre: new FormControl('', Validators.required),
      compradores: new FormControl('', Validators.required),
      tarjeta: new FormControl('', Validators.required),
      no_boletas: new FormControl('', Validators.required),
    })
  }

  ProcesarPago():void{
    const nombre = this.cinepolis_form.get('nombre')?.value;
    const compradores = this.cinepolis_form.get('compradores')?.value;
    const tarjeta = this.cinepolis_form.get('tarjeta')?.value;
    const no_boletas = this.cinepolis_form.get('no_boletas')?.value;
    let descuento:number;

    if(no_boletas > (compradores * 7)){
      this.message = 'No se puede comprar más de 7 boletos por persona';
      return;
    }
    this.message = '';
    if(no_boletas > 5){
      descuento = 1.15;
    }
    else if(no_boletas <= 5 && no_boletas >=3){
      descuento = 1.1;
    }
    else{
      descuento = 1;
    }

    if(tarjeta === 'si'){
      descuento += 0.1;
    }

    console.log(no_boletas)
    console.log(tarjeta)
    console.log(descuento)
    console.log((no_boletas * 12))

    this.totalpagar = Math.round((parseFloat(no_boletas) * 12) / descuento);
  }
}
