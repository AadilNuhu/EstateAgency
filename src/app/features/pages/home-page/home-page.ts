import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Navbar } from '../../../components/navbar/navbar';

@Component({
  selector: 'app-home-page',
  imports: [Navbar, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit, OnDestroy {
  carouselImages = [
    'assets/hero-carousel-1.jpg',
    'assets/hero-carousel-2.jpg',
    'assets/hero-carousel-3.jpg',
  ];

  currentIndex = 0;

  private internalId?: ReturnType<typeof setInterval>;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
    console.log(this.currentIndex);
  }

  change(index: number) {
    this.currentIndex = index;
  }

  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.internalId);
  }
}
