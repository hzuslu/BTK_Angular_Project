import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrl: './detail-dialog.component.css'
})
export class DetailDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductsService,
    private dialogRef: MatDialogRef<DetailDialogComponent>
  ) { }

  addCarts() {
    this.productService.addBoxList(this.data)
    this.dialogRef.close();
  }
}
