import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { JacketComponent } from './jacket/jacket.component';
import { ShoeComponent } from './shoe/shoe.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { HandbagComponent } from './handbag/handbag.component';
import { HatComponent } from './hat/hat.component';
import { CareerComponent } from './career/career.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { SearchListComponent } from './search-list/search-list.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'jacket', component: JacketComponent },
  { path: 'shoe', component: ShoeComponent },
  { path: 'necklace', component: NecklaceComponent },
  { path: 'handbag', component: HandbagComponent },
  { path: 'hat', component: HatComponent },
  { path: 'career', component: CareerComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'basket', component: BasketPageComponent },
  { path: 'search-list', component: SearchListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
