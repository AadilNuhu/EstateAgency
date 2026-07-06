import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-properties-page',
  imports: [RouterLink],
  templateUrl: './properties-page.html',
  styleUrl: './properties-page.css',
})
export class PropertiesPage {
  properties = [
    {
      id:1,
      img:"assets/hero-carousel-1.jpg",
      price: "Rent | $1200",
      name:"204 Mount Olive Road Two",
    },
    {
      id:2,
      img:"assets/hero-carousel-2.jpg",
      price: "Sale | $350.000",
      name:"647 Molie Road",
    },
    {
      id:3,
      img:"assets/hero-carousel-3.jpg",
      price: "Sale | 580.000",
      name:"711 Avenue Road",
    },
    {
      id:4,
      img:"assets/hero-carousel-1.jpg",
      price: "Rent | 6500",
      name:"117 Milk Road",
    },
    {
      id:5,
      img:"assets/hero-carousel-2.jpg",
      price: "Rent | $3000",
      name:"678 Broad Road",
    },
    {
      id:6,
      img:"assets/hero-carousel-3.jpg",
      price: "Sale | $650.000",
      name:"974 Denim Road",
    },
  ]
}
