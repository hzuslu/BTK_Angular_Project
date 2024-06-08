import { Component } from '@angular/core';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-hat',
  templateUrl: './hat.component.html',
  styleUrl: './hat.component.css'
})
export class HatComponent {

  count = ["a", "b"]
  hats: any = []
  constructor(public dialog: MatDialog, private productService: ProductsService) {

    this.hats = this.productService.getHats()
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
