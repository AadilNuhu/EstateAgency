import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {
  services = [
    {
      id:1,
      icon:"bi bi-activity",
      title:"Nesciunt Mete",
      description:"Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      id:2,
      icon:"bi bi-broadcast",
      title:"Eosle Commodi",
      description:"Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    },
    {
      id:3,
      icon:"bi bi-easel",
      title:"Ledo Markt",
      description:"Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    },
    {
      id:4,
      icon:"bi bi-bounding-box-circles",
      title:"Asperiores Commodit",
      description:"Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    },
    {
      id:5,
      icon:"bi bi-calendar4-week",
      title:"Velit Doloremque",
      description:"Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
    },
    {
      id:6,
      icon:"bi bi-chat-square-text",
      title:"Dolori Architecto",
      description:"Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    },
  ]
}
