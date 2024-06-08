import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-jacket',
  templateUrl: './jacket.component.html',
  styleUrl: './jacket.component.css'
})
export class JacketComponent {

  count = ["a", "b"]
  jackets: any = []
  constructor(public dialog: MatDialog, private productService: ProductsService) {

    this.jackets = this.productService.getJackets()
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
