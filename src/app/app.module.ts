import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumCardComponent } from './UI/view-models/album-card/album-card.component';
import { CircularProgressIndicatorComponent } from './UI/common/circular-progress-indicator/circular-progress-indicator.component';
import { AlbumGateway } from './domain/models/Album/gateway/album-use-cases';
import { DomainModule } from './domain/domain.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { AlbumApiService } from './infraestructure/driven-adapter/album-api/album-api.service';

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
    DomainModule,
    InfraestructureModule
  ],
  providers: [{provide: AlbumGateway, useClass: AlbumApiService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
