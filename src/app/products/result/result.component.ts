import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from './../../auth/auth.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  products: any = [];
  productsPresent = false;
  catGroup: FormGroup;
  category: Array<any>;

  constructor(private productsService: ProductsService, private authService: AuthService) { }

  ngOnInit() {
    // this.productsService
    //   .getAllProducts()
    //   .subscribe(
    //     product => this.products = product.obj,
    //     err => console.log(err),
    //     () => {
    //       this.products.length > 0 ? this.productsPresent = true : this.productsPresent = false;
    //     }
    //   );
    this.catGroup = new FormGroup({
      packaging: new FormControl(),
      labeling: new FormControl(),
      multipacks: new FormControl(),
      clamshells: new FormControl(),
      pouch: new FormControl(),
      lifeScience: new FormControl()
    });
  }

  onSubmit(index) {
    const vals = this.catGroup.value;
    const keys = Object.keys(vals);
    this.catGroup.value[keys[index]] = !this.catGroup.value[keys[index]];
    this.category = keys.filter(item => vals[item] == true);
    this.products = [];
    this.productsService
      .getAllProducts()
      .subscribe(
        product => product.obj
          .map(item => {
            console.log(this.category);
            for(let i = 0; i < this.category.length; i++) {
                console.log(item.category);
                if(item.category.indexOf(this.category[i]) > -1) {
                  this.products.push(item)
                } else {
                  this.products.slice([i], 1)
                }
            }
          }
        ),
        err => console.log(err),
        () => {
          this.products.length > 0 ? this.productsPresent = true : this.productsPresent = false;
        }
      );
  }

  onSplice(index) {
    const id = this.products[index]._id;
    this.products.splice(index, 1);
  }

  onDelete(index) {
    const id = this.products[index]._id;
    this.products.splice(index, 1);
    this.products.length === 0 ? this.productsPresent = false : null;
    this.productsService.deleteProduct(id)
        .subscribe(res => console.log(res))
  }

}
