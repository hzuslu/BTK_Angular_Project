import { Component } from '@angular/core';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-handbag',
  templateUrl: './handbag.component.html',
  styleUrl: './handbag.component.css'
})
export class HandbagComponent {

  count = ["a", "b"]
  handbags: any = []
  constructor(public dialog: MatDialog, private productService: ProductsService) {

    this.handbags = this.productService.getHandbags()
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
