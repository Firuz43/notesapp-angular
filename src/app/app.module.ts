import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesNamesComponent } from './notes-names/notes-names.component';
import { NotesDescriptionsComponent } from './notes-descriptions/notes-descriptions.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NoteComponent } from './note/note.component';
import { MainComponent } from './shop/main/main.component';
import { NextComponent } from './shop/next/next.component';
import { NavbarComponent } from './shop/navbar/navbar.component';
import { AddProductComponent } from './shop/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesNamesComponent,
    NotesDescriptionsComponent,
    SearchComponent,
    NoteComponent,
    MainComponent,
    NextComponent,
    NavbarComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
