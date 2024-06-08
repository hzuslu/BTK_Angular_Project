import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrl: './necklace.component.css'
})
export class NecklaceComponent {


  count = ["a", "b"]
  necklaces: any = []
  constructor(public dialog: MatDialog, private productService: ProductsService) {

    this.necklaces = this.productService.getNecklaces()
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
