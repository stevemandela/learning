import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Cour } from '../entities/cours';
import { Commentaire } from '../entities/commentaire';
import { User } from '../entities/user';
import { isPending } from 'q';
import { Router, ParamMap } from '@angular/router';
import { CoursServices } from '../services/coursServices';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {


  _coursFilter: string;
  filteredCours: any [];
  coursServices: CoursServices;
  cours: any[] = [];

  constructor(private route: ActivatedRoute, coursServices: CoursServices) {
    this.coursServices = coursServices;
    this.coursServices.getAllCours().subscribe(cours => { this.cours =  cours  });
    this.filteredCours = this.cours;
  }

  get coursFilter(): string {
      return this._coursFilter;
  }

  set coursFilter ( vars: string ) {
      console.log(vars);
      this._coursFilter = vars;
      // tslint:disable-next-line:max-line-length
      this.filteredCours = vars ? this.cours.filter((cours: any) => cours.titre.toLowerCase().indexOf(vars.toLowerCase()) !== -1) : this.cours;

  }

  ngOnInit() {
  }

}
