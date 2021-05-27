import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component'
const routes: Routes = [

{
  path : 'home',
  component : HomeComponent
},
{
  path : 'navbar',
  component : NavbarComponent
}, 

{
  path: 'aboutus',
  component : AboutusComponent
},
{
  path : 'courses',
  component: CoursesComponent
},
{
path : 'contact',
component : ContactComponent
},
{
path : 'upcoming',
component : UpcomingComponent
},
{
  path : '**',
  component : HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
