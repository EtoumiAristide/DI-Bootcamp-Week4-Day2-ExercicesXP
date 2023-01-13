import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent {
  Products = [
    { nom: 'chaussures', prix: 480 },
    { nom: 'chemise', prix: 220 },
    { nom: 'montre', prix: 350 },
    { nom: 'pantalon', prix: 130 },
    { nom: 'chaussettes', prix: 80 }
  ]

  ProductColor(prix: number) {
    if (prix > 300) {

      return 'highlightDirective'

    }
    return 'color'
  }
}
