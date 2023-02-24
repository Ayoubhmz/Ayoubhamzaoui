import { Component, OnInit } from '@angular/core';
import {Emploi} from "../Core/model/emploi";
import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  listeEmploi!: Emploi[];
  nbEmploisNonClotures = 0;
  filtre!: string;
  s!:number;

  constructor(private cs:CalculService) { }

  ngOnInit(): void {
    this.listeEmploi=[
      {reference:"0",titre:"aaa",entreprise:"A",etat:true},
      {reference:"1",titre:"bbb",entreprise:"B",etat:true},
      {reference:"2",titre:"ccc",entreprise:"C",etat:false},
    ]}

    calculerBilan(){
      this.s = this.cs.getNumberOf(this.listeEmploi,"etat",true)

  }

}
