import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Cour } from '../entities/cours';
import { Commentaire } from '../entities/commentaire';
import { User } from '../entities/user';
import { isPending } from 'q';
import { Router, ParamMap } from '@angular/router';
import { ArticlesServices } from '../services/articlesServices';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
   _articlesFilter: number;
   filteredArticles: any [];
   articlesServices: ArticlesServices;
   articles: number[] = [];


  constructor(private route: ActivatedRoute, articlesServices: ArticlesServices) {
      this.articlesServices = articlesServices;
  /*  this.articlesServices.getAllCours().subscribe(cours => { this.cours = Cours });*/
      this.filteredArticles = this.articles;
  }

  get articlesFilter(): number {
    return this._articlesFilter;
  }

  set coursFilter ( vars: number ) {
    console.log(vars);
    this._articlesFilter = vars;
    // tslint:disable-next-line:max-line-length
    this.filteredArticles = vars ? this.articles.filter((cours: any) => cours.titre.toLowerCase().indexOf()) : this.articles;
  }

  ngOnInit() {
  }


}
