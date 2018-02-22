import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AlertModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ImageService } from './services/image.service';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabprofileComponent } from './components/tabprofile/tabprofile.component';
import { TabmainComponent } from './components/tabmain/tabmain.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SingleImageComponent } from './components/single-image/single-image.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "image/:id", component: SingleImageComponent },
  
  {
    path: 'main',
    component: MainComponent,
    
  },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    TabprofileComponent,
    TabmainComponent,
    GalleryComponent,
    SingleImageComponent
  ],
  imports: [
    BrowserModule,
    
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    AlertModule.forRoot()
    
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
