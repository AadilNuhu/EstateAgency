import { Routes } from '@angular/router';
import { AboutPage } from './features/pages/about-page/about-page';
import { HomePage } from './features/pages/home-page/home-page';
import { PropertiesPage } from './features/pages/properties-page/properties-page';
import { Property } from './features/pages/property/property';
import { ServicesPage } from './features/pages/services-page/services-page';
import { ServiceDetail } from './features/pages/service-detail/service-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePage,
  },
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'properties', component: PropertiesPage },
  { path: 'services', component: ServicesPage },
  { path: 'service', component: ServiceDetail },
  { path: 'property', component: Property },
  { path: 'property/video', component: Property },
  { path: 'property/floor', component: Property },
  { path: 'property/location', component: Property },
];
