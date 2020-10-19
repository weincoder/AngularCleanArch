import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Album } from '../models/Album/album';
import {AlbumUseCases} from '../models/Album/gateway/album-use-cases';
@Injectable({
  providedIn: 'root'
})

export class GetAlbumUseCases {

  private _albumUseCase: AlbumUseCases;
  
  
  getAlbumById (id: String) : Observable <Album> {
    //TODO: En este sitio podríamos manejar las configuraciones 
    //en cache
    return this._albumUseCase.getByID(id);
  }
  getAllAlbum () : Observable <Array<Album>> {
    return this._albumUseCase.getAll();
  }

}