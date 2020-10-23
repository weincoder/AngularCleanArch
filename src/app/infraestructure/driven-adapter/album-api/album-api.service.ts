import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from 'src/app/domain/models/Album/album';
import { AlbumGateway } from 'src/app/domain/models/Album/gateway/album-gateway';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export  class AlbumApiService extends AlbumGateway {

  private _url = 'https://jsonplaceholder.typicode.com/albums/';
  constructor(private http: HttpClient) {super();}
  getByID(id: String): Observable<Album> {
    return this.http.get<Album>(this._url+id).pipe(delay(2000));
  }
  getAll(): Observable<Album[]> {
    return this.http.get<Array<Album>>(this._url);
  }
  saveNew(_alb: Album): Observable<void> {
    throw new Error('Method not implemented.');
  }
  
}
