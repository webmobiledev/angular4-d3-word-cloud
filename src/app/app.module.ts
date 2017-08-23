import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';

@NgModule({
  declarations: [
    AppComponent,
    WordCloudComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
