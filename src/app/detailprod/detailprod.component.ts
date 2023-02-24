import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../Core/model/product";

@Component({
  selector: 'app-detailprod',
  templateUrl: './detailprod.component.html',
  styleUrls: ['./detailprod.component.css']
})
export class DetailprodComponent implements OnInit {
  id! : number;
  p!:Product;

  constructor(private route:ActivatedRoute, private ps:ProductService) {}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.p=this.ps.listproduct[this.id];
  }

}
