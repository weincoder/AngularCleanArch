import { Observable } from 'rxjs';
import { Album } from '../album';

export interface AlbumUseCases {
    getByID(id: String): Observable<Album>;
    getAll(): Observable<Array<Album>>;
    saveNew (_alb :Album) : Observable<void>;
}
