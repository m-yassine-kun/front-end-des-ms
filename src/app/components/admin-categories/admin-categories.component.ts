import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../../services/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  categories;
  new_cat_mode:boolean=false;
  show_cat_mode:boolean=true;
  edit_cat_mode:boolean=false;

  constructor(private catalogueService:CatalogueService) { }


  ngOnInit(): void {
    this.onGetAllCategories()
  }

  onGetAllCategories(){
    this.catalogueService.getAllCategories()
      .subscribe(data=>{
        this.categories=data;
      },err=>{
        console.log(err)
      })
  }

  onDeleteCat(cat){
    let c=confirm("Are you sure you want to delete ?")
    if (!c) return
    this.catalogueService.deleteRessource(cat._links.self.href)
      .subscribe(data=>{
        this.onGetAllCategories()

      },err=>{
        console.log(err)
      })
  }

  onNewCat(){
    this.new_cat_mode=!this.new_cat_mode;
    // this.show_cat_mode=!this.show_cat_mode


  }

    onSaveCat(cat){
      let url=this.catalogueService.host_ms_product+"/categories"
      this.catalogueService.postRessource(url,cat)
        .subscribe(data=>{
          this.new_cat_mode=!this.new_cat_mode;
          // this.show_cat_mode=!this.show_cat_mode
          this.onGetAllCategories()
        },err=>{
          console.log(err)
        })
    }

    currentCategorie;
  onEditCat(cat){
    this.edit_cat_mode=!this.edit_cat_mode

    this.catalogueService.getRessource(cat._links.self.href)
      .subscribe(data=>{
        // this.edit_cat_mode=!this.edit_cat_mode;
        // this.show_cat_mode=!this.show_cat_mode
        this.currentCategorie=data;

    },err=>{
      console.log(err)
    })
  }

  onUpdateCat(cat){
    this.catalogueService.updateRessource(this.currentCategorie._links.self.href,cat)
      .subscribe(data=>{
        this.edit_cat_mode=!this.edit_cat_mode

        // this.show_cat_mode=!this.show_cat_mode
        this.onGetAllCategories()
      },err=>{
        console.log(err)
      })
  }


}
