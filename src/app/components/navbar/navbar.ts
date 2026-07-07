import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen: boolean = false;

  navs = [
    {
      text: 'Home',
      path: 'home',
      exact: false,
    },
    {
      text: 'About',
      path: 'about',
      exact: false,
    },
    {
      text: 'Services',
      path: 'services',
      exact: false,
    },
    {
      text: 'Properties',
      path: 'properties',
      exact: false,
    },
    {
      text: 'Agents',
      path: 'agents',
      exact: false,
    },
    {
      text: 'Contact',
      path: 'contact',
      exact: false,
    },
  ];

  getActiveNav() {}
}
