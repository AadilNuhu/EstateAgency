import { Component, signal } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { HomePage } from './features/pages/home-page/home-page';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('estateagency');
}
