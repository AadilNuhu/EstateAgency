import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgClass } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { Footer } from '../../../components/footer/footer';
import { Navbar } from '../../../components/navbar/navbar';

@Component({
  selector: 'app-home-page',
  imports: [Navbar, RouterLink, Footer, NgClass],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit, OnDestroy {
  //
  private sub?: Subscription;

  carouselItems = [
    {
      image: 'assets/hero-carousel-1.jpg',
      streetName: 'Olive Road Two',
      streetNumber: 204,
      amount: 'rent | $ 12.000',
    },
    {
      image: 'assets/hero-carousel-2.jpg',
      streetName: 'Venda Road Five',
      streetNumber: 247,
      amount: 'sale | $ 356.000',
    },
    {
      image: 'assets/hero-carousel-3.jpg',
      streetName: 'Vitra Road three',
      streetNumber: 247,
      amount: 'rent | $ 3.000',
    },
  ];

  currentIndex = 0;
  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.sub = interval(6000).subscribe(() => {
      this.zone.run(() => {
        this.next();
        this.cdr.markForCheck();
      });
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  change(index: number) {
    this.currentIndex = index;
  }

  serviceCardItems = [
    {
      icon: 'bi bi-activity',
      title: 'Nesciunt Mete',
      text: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
    },
    {
      icon: 'bi bi-broadcast',
      title: 'Eosle Commodi',
      text: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
    },
    {
      icon: 'bi bi-easel',
      title: 'Ledo Markt',
      text: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
    },
    {
      icon: 'bi bi-bounding-box-circles',
      title: 'Asperiores Commodit',
      text: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
    },
    {
      icon: 'bi bi-calendar4-week',
      title: 'Velit Doloremque',
      text: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
    },
    {
      icon: 'bi bi-chat-square-text',
      title: 'Dolori Architecto',
      text: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
    },
  ];

  agents = [
    { name: 'Walter White', imgUrl: 'assets/team-1.jpg', role: 'Chief Executive Officer' },
    { name: 'Sarah Jhonson', imgUrl: 'assets/team-2.jpg', role: 'Rent Manager' },
    { name: 'William Anderson', imgUrl: 'assets/team-3.jpg', role: 'Sale manager' },
  ];
}
