import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlbumsModule } from './albums/albums.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AlbumsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
