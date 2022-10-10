import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';

const routes: Routes=[
  {path:"products/:urlProd",component:ProductsComponent},
  {path:"login",component:LoginComponent},
  {path:"adminCategories",component:AdminCategoriesComponent},
  {path:"adminProducts",component:AdminProductsComponent},
  {path:"adminUsers",component:AdminUsersComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    LoginComponent,
    AdminCategoriesComponent,
    AdminProductsComponent,
    AdminUsersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
