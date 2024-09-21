import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  //ngif = true || false


  productoa:any[]=[
  {
    "productoID":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas",
    "Precio":30000,
    "Year":2023,
    "Marca":"NISSAN",
    "Color":"Azul",
    "imgenURL":"https://th.bing.com/th/id/OIP.lq9e_8tuE95CAwlsh_TFJQHaEK?rs=1&pid=ImgDetMain",
  },
  {
    "productoID":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas",
    "Precio":20000,
    "Year":2022,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imgenURL":"https://th.bing.com/th/id/OIP.fhwoITXEzZUp_GDQc0-CTwHaFj?rs=1&pid=ImgDetMain",
  },
  {
    "productoID":3,
    "Modelo":"Rio",
    "Descripcion":"4 puertas",
    "Precio":150000,
    "Year":2020,
    "Marca":"KIA",
    "Color":"Azul",
    "imgenURL":"https://th.bing.com/th/id/OIP.YQLpIK8yqOPw-CHiYPFRVQHaEA?rs=1&pid=ImgDetMain",
  },


]

}
