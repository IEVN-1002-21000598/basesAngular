import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productos:any[]=[
  {
    "productoID":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas",
    "Precio":30000,
    "Year":2023,
    "Marca":"NISSAN",
    "Color":"Azul",
    "imgenURL":"",
  },
  {
    "productoID":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas",
    "Precio":20000,
    "Year":2022,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imgenURL":"",
  },
  {
    "productoID":3,
    "Modelo":"Rio",
    "Descripcion":"4 puertas",
    "Precio":150000,
    "Year":2020,
    "Marca":"KIA",
    "Color":"Azul",
    "imgenURL":"",
  },


]

}
