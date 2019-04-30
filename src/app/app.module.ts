import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CoursComponent } from './cours/cours.component';
import { ExamenComponent } from './examen/examen.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { MyPipe } from './Pipe/myPipe';
import { CoursServices } from './services/coursServices';
import { ArticlesServices } from './services/articlesServices';
import { CoursDetailsComponent } from './cours-details/cours-details.component';
import { HttpModule } from '@angular/http';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArticlesComponent } from './articles/articles.component';


const router: Routes = [
  {
     path: 'acceuil ',
     component: AcceuilComponent
  },
  {
    path: 'authentification',
    component: AuthentificationComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'examen',
    component: ExamenComponent
  },
  {
    path: 'cours',
    component: CoursComponent
  },
  {
    path: 'articles',
    component: CoursComponent
  },
  {
    path: 'cours/:id',
    component: CoursDetailsComponent
  }



];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AuthentificationComponent,
    CoursComponent,
    ExamenComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    ProfileComponent,
    MyPipe,
    CoursDetailsComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(router)
  ],

  providers: [CoursServices],
  bootstrap: [MainComponent],
})
export class AppModule {

 }
