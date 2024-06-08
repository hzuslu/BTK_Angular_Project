import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  budgetCount: number = 0;

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productService.itemCount$.subscribe(itemCount => {
      this.budgetCount = itemCount;
    });
  }

  filterList(query: string) {
    this.router.navigate(['/search-list']);
    this.productService.filterListWithQuery(query);
  }
}
