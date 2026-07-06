import { Routes } from '@angular/router';
import { PropertiesPage } from './features/pages/properties-page/properties-page';
import { HomePage } from './features/pages/home-page/home-page';
import { Property } from './features/pages/property/property';

export const routes: Routes = [
    { path: 'properties', component: PropertiesPage },
    { path: 'property', component: Property },
    { path: 'property/video', component: Property },
    { path: 'property/floor', component: Property },
    { path: 'property/location', component: Property },
    { path: '', component: HomePage }
];
