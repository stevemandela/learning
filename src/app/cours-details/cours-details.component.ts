import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursServices } from '../services/coursServices';
import { Cour } from '../entities/cours';
import { Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit {

 /* cours: Cour;*/

  constructor(/*private route: ActivatedRoute, private coursService: CoursServices*/) { }

  ngOnInit() {
    /*this.cours = this.coursService.getCoursById(+this.route.snapshot.paramMap.get('id'));*/
  }

}
