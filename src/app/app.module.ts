import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductsComponent } from './products/products.component';
import { MatMenuModule } from '@angular/material/menu';
import { JacketComponent } from './jacket/jacket.component';
import { MatIconModule } from '@angular/material/icon';
import { SlicePipe } from './slice.pipe';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { MatDialog, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { ShoeComponent } from './shoe/shoe.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { HandbagComponent } from './handbag/handbag.component';
import { HatComponent } from './hat/hat.component';
import { CareerComponent } from './career/career.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchListComponent } from './search-list/search-list.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ProductsComponent,
    JacketComponent,
    SlicePipe,
    DetailDialogComponent,
    ShoeComponent,
    NecklaceComponent,
    HandbagComponent,
    HatComponent,
    CareerComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    BasketPageComponent,
    SearchListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
