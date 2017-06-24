import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ProductsService } from './../products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private productService: ProductsService) { }

  onSubmit() {
    const newProduct = new Product(
      this.createForm.value.location, 
      this.createForm.value.productName,
      this.createForm.value.website,
      this.createForm.value.logo
    );
    this.productService.createProduct(newProduct);
  }

  ngOnInit() {
    this.createForm = new FormGroup({
            location: new FormControl(null, Validators.required),
            productName: new FormControl(null, Validators.required),
            website: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            logo: new FormControl(null, Validators.required)
        })
  }

}
