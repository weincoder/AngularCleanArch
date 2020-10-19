import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from 'src/app/domain/models/Album/album';
import { flatMap, map } from 'rxjs/operators';
import { AlbumUseCases } from 'src/app/domain/models/Album/gateway/album-use-cases';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlbumApiService implements AlbumUseCases {

  private _url = 'https://jsonplaceholder.typicode.com/albums/';
  private _urlArray = 'https://jsonplaceholder.typicode.com/albums/';
  
  constructor(private http: HttpClient) {}
  getByID(id: String): Observable<Album> {
    return this.http.get<Album>(this._url+id);
  }
  getAll(): Observable<Album[]> {
    return this.http.get<Array<Album>>(this._urlArray);
  }
  saveNew(_alb: Album): Observable<void> {
    throw new Error('Method not implemented.');
  }
  
}