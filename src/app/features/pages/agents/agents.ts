import { Component } from '@angular/core';

@Component({
  selector: 'app-agents',
  imports: [],
  templateUrl: './agents.html',
  styleUrl: './agents.css',
})
export class Agents {
  agents = [
    { name: 'Walter White', imgUrl: 'assets/team-1.jpg', role: 'Chief Executive Officer' },
    { name: 'Sarah Jhonson', imgUrl: 'assets/team-2.jpg', role: 'Rent Manager' },
    { name: 'William Anderson', imgUrl: 'assets/team-3.jpg', role: 'Sale manager' },
  ];
}
