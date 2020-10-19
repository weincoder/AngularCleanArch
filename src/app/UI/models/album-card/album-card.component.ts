import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import {AlbumApiService} from '../../../infraestructure/driven-adapter/album-api/album-api.service'
import {GetAlbumUseCases} from '../../../domain/usecase/get-album-use-case'
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  constructor(private _albumApiService : AlbumApiService) { }
  response$ ;
  datos;
  ngOnInit(): void {
    this.response$ = this._albumApiService.getByID('4');
    this.response$.subscribe (
      (data) => {
 
        this.datos = data;
      }
    );
    
  }

}
