import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path : '' , redirectTo : 'home' , pathMatch : 'full'},
    {path: 'home' , component: HomeComponent , title: 'home'},
    {path: 'about' , component: AboutComponent , title: 'about'},
    {path: 'contact' , component: ContactComponent, title: 'contact'},
    {path: 'portfolio' , component: PortfolioComponent , title: 'portfolio'},


    

];
