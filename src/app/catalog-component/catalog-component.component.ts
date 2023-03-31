import { Component } from '@angular/core';

import { Product } from './productlist';
@Component({
  selector: 'app-catalog-component',
  templateUrl: './catalog-component.component.html',
  styleUrls: ['./catalog-component.component.css'],
})
export class CatalogComponentComponent {
  product: Product[];

  constructor() {
    this.product = [];
    this.product.push(new Product(1, 'Product 1', 25, true));
    this.product.push(new Product(2, 'Product 2', 5, false));
    this.product.push(new Product(3, 'Product 3', undefined, true));
    this.product.push(new Product(4, 'Product 4', 10, false));
    this.product.push(new Product(5, 'Product 5', 12, false));
    this.product.push(new Product(6, 'Product 6', undefined, false));
    this.product.push(new Product(7, 'Product 7', 25, false));
    this.product.push(new Product(8, 'Product 8', 25, true));
    this.product.push(new Product(9, 'Product 9', 25, true));
    this.product.push(new Product(10, 'Product 10', undefined, false));
    this.product.push(new Product(11, 'Product 11', 25, false));
    this.product.push(new Product(12, 'Product 12', 25, false));
    this.product.push(new Product(13, 'Product 13', undefined, false));
    this.product.push(new Product(14, 'Product 14', 25, false));
  }

  //product: array[]Product;
  /*  produits = ProduitTable.produits;

  toggle(value: string): void {
    if (value === 'Promo') {
      this.produits = ProduitTable.produits;
      this.produits = this.produits.filter((produit) => produit.promo === null);
    } else if (value === 'vides') {
      this.produits = ProduitTable.produits;
      this.produits = this.produits.filter((produit) => produit.prix === null);
    } else {
      this.produits = ProduitTable.produits;
    }
  }*/
}
