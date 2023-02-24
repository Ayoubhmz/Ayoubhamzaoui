import { Component, OnInit } from '@angular/core';
import {Product} from "../Core/model/product";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  Product!:Product;


  constructor(private serviceProduct:ProductService,private route:Router) { }

  ngOnInit(): void {
    this.Product = new Product();
  }

  add(product:Product){
    this.serviceProduct.addProduct(product);
    this.route.navigateByUrl("/Product");

  }



}
