import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  products: any = [];
  productsPresent = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService
      .getAllProducts()
      .subscribe(
        product => this.products = product.obj,
        err => console.log(err),
        () => {
          this.products.length > 0 ? this.productsPresent = true : this.productsPresent = false;
        }
      );
  }

  onDelete(index) {
    const id = this.products[index]._id;
    this.products.splice(index, 1);
    this.products.length === 0 ? this.productsPresent = false : null;
    this.productsService.deleteProduct(id)
        .subscribe(res => console.log(res))
  }

}
