import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  filteredList: any[] = [];

  constructor(public dialog: MatDialog, private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getFilteredList().subscribe(
      items => {
        this.filteredList = items;
      }
    );
  }

  openDialog(product: any) {
    this.dialog.open(DetailDialogComponent, {
      data: product
    });
  }

  addCarts(item: any) {
    this.productService.addBoxList(item);
  }

  filterListWithQuery(query: string) {
    this.productService.filterListWithQuery(query);
  }
}
