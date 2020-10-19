import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
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
  constructor (private _albumApiService : AlbumApiService){}
  ngOnInit(): void {

   
    
  }
  
}
