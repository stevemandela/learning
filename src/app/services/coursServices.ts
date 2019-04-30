
import { Cour } from '../entities/cours';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


 @Injectable()
export class CoursServices {

  cours: Cour;
  constructor(public http: Http) {

      }
    getAllCours(): Observable < Cour[] > {
        return this.http.get('http://localhost:3000/cours').map(db => db.json());
    }
    /*cours: Cour[]= [{
        id: 1,
        titre: 'JAVA',
        contenu: 'cour insuffisant',
        date: new Date,
        enseignant: {
          id: 1,
          nom: 'Steve',
          prenom: 'Mandela',
          email: 'stevewandji93@yahoo.fr',
          enseignant: true,
        },
        note: 5,
        commentaires: [{
          id: 1,
          contenu: 'null' ,
          date: new Date,
          utilisateur: {
            id: 1,
            nom: 'Steve',
            prenom: 'Mandela',
            email: 'stevewandji93@yahoo.fr',
            enseignant: true,
          },
        }],
      },
      {
      id: 2,
      titre: 'Recherche Operationnelle',
      contenu: 'cour insuffisant',
      date: new Date,
      enseignant: {
        id: 2,
        nom: 'Steve',
        prenom: 'Mandela',
        email: 'stevewandji93@yahoo.fr',
        enseignant: true,
      },
      note: 10,
      commentaires: [{
        id: 2,
        contenu: 'null' ,
        date: new Date,
        utilisateur: {
          id: 1,
          nom: 'Steve',
          prenom: 'Mandela',
          email: 'stevewandji93@yahoo.fr',
          enseignant: true,
        },
      }],
    }];
    /*this.coursServices.getAllCours().subscribe(cours => { this.cours = cours; });
    getAllCours(): Cour[] {
        return this.cours;
    }*/
   /* getCoursById(id: number): Cour {
        return this.cours; /*.find((cour: Cour) => cour.id === id);
   }*/
}





