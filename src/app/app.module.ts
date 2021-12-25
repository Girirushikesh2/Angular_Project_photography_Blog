import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { HttpClientModule } from '@angular/common/http';

import { GalleryComponent } from './pages/gallery/gallery.component';
import { WildlifeComponent } from './pages/wildlife/wildlife.component';
import { WeddingComponent } from './pages/wedding/wedding.component';
import { LandscapeComponent } from './pages/landscape/landscape.component';
import { PaginationComponent } from './sharepage/pagination/pagination.component';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { OurteamComponent } from './ourteam/ourteam.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    BlogpageComponent,
    UsersComponent,
    
    GalleryComponent,
    WildlifeComponent,
    WeddingComponent,
    LandscapeComponent,
    PaginationComponent,
    OurteamComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LightboxModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
