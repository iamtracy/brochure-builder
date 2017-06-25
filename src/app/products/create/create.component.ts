import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import 'rxjs/add/operator/map';

import { ProductsService } from './../products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  catGroup: FormGroup;
  categories: Array<any>;

  constructor(private productService: ProductsService) { }

  onSubmit() {
    const newProduct = new Product(
      this.createForm.value.city, 
      this.createForm.value.productName,
      this.createForm.value.website,
      this.createForm.value.logo,
      this.categories
    );
    this.productService
      .createProduct(newProduct)
      .subscribe(res => console.log(res))
    this.createForm.reset();
  }

  ngOnInit() {
    this.createForm = new FormGroup({
            city: new FormControl(null, Validators.required),
            productName: new FormControl(null, Validators.required),
            website: new FormControl(null, Validators.required),
            logo: new FormControl(null, Validators.required),
    });
    this.catGroup = new FormGroup({
      packaging: new FormControl(),
      labeling: new FormControl(),
      multipacks: new FormControl(),
      clamshells: new FormControl(),
      pouch: new FormControl(),
      lifeScience: new FormControl()
    });
  }

  category(index) {
    const vals = this.catGroup.value;
    const keys = Object.keys(vals);
    this.catGroup.value[keys[index]] = !this.catGroup.value[keys[index]];
    this.categories = keys.filter(item => vals[item] == true);
  }

}
