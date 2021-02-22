import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumCardComponent } from './UI/view-models/album-card/album-card.component';
import { CircularProgressIndicatorComponent } from './UI/common/circular-progress-indicator/circular-progress-indicator.component';
import { AlbumGateway } from './domain/models/Album/gateway/album-gateway';
import { AlbumApiService } from './infraestructure/driven-adapter/album-api/album-api.service';
import { AlbumApiServiceWithoutDelay } from './infraestructure/driven-adapter/album-api/album-api-withou-delay.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumCardComponent,
    CircularProgressIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{provide: AlbumGateway, useClass: AlbumApiService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
