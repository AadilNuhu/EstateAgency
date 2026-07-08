import { Component } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  imports: [],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css',
})
export class ServiceDetail {
  serviceList = [
    "Web Design",
    "Web Development",
    "Product Management",
    "Graphic Design",
    "Marketing",
  ]
}
