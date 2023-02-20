import { Component, OnInit } from '@angular/core';
import {Product} from "../Core/model/product";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  Product!:Product;



  constructor() { }

  ngOnInit(): void {
    this.Product = new Product();
  }


}
