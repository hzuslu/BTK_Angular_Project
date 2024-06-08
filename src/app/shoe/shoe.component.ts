import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrl: './shoe.component.css'
})
export class ShoeComponent {

  count = ["a", "b"]
  shoes: any = []
  constructor(public dialog: MatDialog, private productService: ProductsService) {

    this.shoes = this.productService.getShoes()
  }

  openDialog(product: any) {
    this.dialog.open(DetailDialogComponent, {
      data: product
    });
  }

  addCarts(item: any) {
    this.productService.addBoxList(item)
  }
}
