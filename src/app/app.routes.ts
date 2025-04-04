import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: "about", component: AboutComponent},
    {path: "blog", component: BlogComponent}
];
