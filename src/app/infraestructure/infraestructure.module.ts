import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlbumApiService } from './driven-adapter/album-api/album-api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [

  ],
  providers:[AlbumApiService],
  exports: [

  ]
})
export class InfraestructureModule { }
