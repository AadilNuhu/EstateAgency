import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Footer],
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
