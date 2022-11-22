import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesDescriptionsComponent } from './notes-descriptions/notes-descriptions.component';
import { NotesNamesComponent } from './notes-names/notes-names.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'notes', component: NotesNamesComponent },
  { path: 'description', component: NotesDescriptionsComponent },
  { path: 'description/:id', component: NotesDescriptionsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
