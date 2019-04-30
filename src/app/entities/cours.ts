import { User } from './user';
import { Commentaire } from './commentaire';

export class Cour {
    id: number;
    titre: string;
    contenu: string;
    date: Date;
    enseignant: User;
    note: number;
    commentaires: Commentaire [];
}
