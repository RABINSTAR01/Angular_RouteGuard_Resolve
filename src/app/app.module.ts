import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkComponent } from './mark/mark.component';
import { ResovegGuard } from './resoveg.guard';

@NgModule({
  declarations: [
    AppComponent,
    MarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ResovegGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
