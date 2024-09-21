import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  //ngif = true || false
  imageWidth:number=120;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFiltrar:string='';

  muestImg():void{
    this.muestraImg =! this.muestraImg;
  }

  productoa:IProductos[]=[
  {
    "productoID":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas",
    "Precio":30000,
    "Year":"march 5 2020",
    "Marca":"NISSAN",
    "Color":"Azul",
    "imgenURL":"https://th.bing.com/th/id/OIP.lq9e_8tuE95CAwlsh_TFJQHaEK?rs=1&pid=ImgDetMain",
  },
  {
    "productoID":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas",
    "Precio":20000,
    "Year":"septiembre 5 2020",
    "Marca":"AUDI",
    "Color":"Blanco",
    "imgenURL":"https://th.bing.com/th/id/OIP.fhwoITXEzZUp_GDQc0-CTwHaFj?rs=1&pid=ImgDetMain",
  },
  {
    "productoID":3,
    "Modelo":"Rio",
    "Descripcion":"4 puertas",
    "Precio":150000,
    "Year":"august 5 2020",
    "Marca":"KIA",
    "Color":"Azul",
    "imgenURL":"https://th.bing.com/th/id/OIP.YQLpIK8yqOPw-CHiYPFRVQHaEA?rs=1&pid=ImgDetMain",
  },


]

}
