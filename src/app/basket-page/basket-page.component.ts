import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {

  basketList: any[] = [];
  totalCount: number = 0;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.basketList = this.productService.getBoxList();
    console.log(this.basketList);

    this.basketList.forEach(element => {
      this.totalCount += element.price;
    });
  }

}
