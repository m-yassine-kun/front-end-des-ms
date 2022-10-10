import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../../services/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private catalogueService:CatalogueService,private router:Router) { }
  categories;
  currentCategory;
  ngOnInit(): void {
  this.catalogueService.getAllCategories()
    .subscribe(data=>{
      this.categories=data;
    },err=>{
      console.log(err)
    })
  }

  getProduct(c: any) {
    this.currentCategory=c
    let url=c._links.products.href
    this.router.navigateByUrl("/products/"+btoa(url))

  }
}
