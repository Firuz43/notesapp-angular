import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NotesDescriptionsComponent } from './notes-descriptions/notes-descriptions.component';
import { NotesNamesComponent } from './notes-names/notes-names.component';
import { MainComponent } from './shop/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'notes', component: NotesNamesComponent },
  { path: 'description', component: NotesDescriptionsComponent },
  { path: 'note/:id', component: NoteComponent, },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
