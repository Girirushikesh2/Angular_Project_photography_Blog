import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurteamComponent } from './ourteam/ourteam.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LandscapeComponent } from './pages/landscape/landscape.component';

import { UsersComponent } from './pages/users/users.component';
import { WeddingComponent } from './pages/wedding/wedding.component';
import { WildlifeComponent } from './pages/wildlife/wildlife.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'blog',component:BlogComponent},
  {path: 'blog/:id',component:BlogpageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'users',component:UsersComponent},
  {path: 'gallery',component:GalleryComponent},
  {path: 'wildlife',component:WildlifeComponent},
  {path:'wedding',component:WeddingComponent},
  {path:'landscape',component:LandscapeComponent},
  {path:'ourteam',component:OurteamComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
