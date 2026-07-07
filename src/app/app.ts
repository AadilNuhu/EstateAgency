import { Component, HostListener, signal } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('estateagency');

  showJumpToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showJumpToTop = window.scrollY > 50;
  }

  jumpToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
