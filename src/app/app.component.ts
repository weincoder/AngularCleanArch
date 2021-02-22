import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AlbumApiServiceWithoutDelay } from './infraestructure/driven-adapter/album-api/album-api-withou-delay.service';
import {AlbumApiService} from './infraestructure/driven-adapter/album-api/album-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  response$ ;
  datos;
  title = 'clean-arch-angular';
  constructor (private _albumApiService : AlbumApiServiceWithoutDelay){}
  ngOnInit(): void {

   
    
  }
  
}
