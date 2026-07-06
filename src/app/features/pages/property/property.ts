import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-property',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './property.html',
  styleUrl: './property.css',
})
export class Property { }
