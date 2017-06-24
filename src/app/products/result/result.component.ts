import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  products: any = [];
  addMode = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService
      .getAllProducts()
      .subscribe(product => {
        this.products = product.obj;
      });
  }

  onDelete(index) {
    const id = this.products[index]._id;
    this.products.splice(index, 1);
    this.productsService.deleteProduct(id)
        .subscribe(res => console.log(res))
  }

}
