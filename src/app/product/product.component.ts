import { Component, OnInit } from '@angular/core';
import {Product} from "../Core/model/product";
import {ProductService} from "../services/product.service";
import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  titlee : string = 'Product'
  listProduct! : Product[];
  price_max! : number;
  s!: number;

  constructor( private serviceProduct:ProductService, private  calculservice:CalculService) { }

  ngOnInit(): void {
    this.listProduct=this.serviceProduct.listproduct;

  }
  buy(i:number){
    this.listProduct[i].quantity--;
  }
  like(i:number){
    this.listProduct[i].like++;
  }
  count(){
   this.s = this.calculservice.getNumberOf(this.listProduct,"like",0)
  }

}
