import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../../services/catalogue.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  constructor(private catalogueService:CatalogueService,private router:Router,private route:ActivatedRoute) {
    router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        let url = atob(route.snapshot.params['urlProd'])
        this.getProducts(url)
      }
    })
  }

  ngOnInit(): void {
  }
  getProducts(url){
    this.catalogueService.getRessource(url)
      .subscribe(data=>{
        this.products=data;
      },err=>{
        console.log(err);
      })
  }


}
