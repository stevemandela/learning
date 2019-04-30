import { User } from './user';

export class Commentaire {
    id: number;
    contenu: string;
    date: Date;
    utilisateur: User;
}
