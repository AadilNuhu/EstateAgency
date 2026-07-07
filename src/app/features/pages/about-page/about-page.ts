import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-about-page',
  imports: [Footer, RouterLink],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  stats = [
    { text: 'Happy Clients', icon: 'bi bi-emoji-smile', value: 232 },
    { text: 'Projects', icon: 'bi bi-journal-richtext', value: 521 },
    { text: 'Projects', icon: 'bi bi-headset', value: 521 },
    { text: 'Hard Workers', icon: 'bi bi-people', value: 15 },
  ];

  features = [
    {
      text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
      icon: 'bi bi-easel',
      title: 'Lorem Ipsum',
    },
    {
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
      icon: 'bi bi-patch-check',
      title: 'Nemo Enim',
    },
    {
      text: 'Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis',
      icon: 'bi bi-brightness-high',
      title: 'Dine Pad',
    },
    {
      text: 'Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi',
      icon: 'bi bi-brightness-high',
      title: 'Tride clov',
    },
  ];
}
