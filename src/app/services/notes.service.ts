import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('http://localhost:3000/notes')
  }

  createNote(notes: { id: string, title: string, description: string, date: Date }) {
    console.log(notes)
    this.http.post('http://localhost:3000/notes', notes).subscribe((res) => {
      console.log(res)
    })
  }

  deleteNote(noteId: any) {
    return this.http.delete('http://localhost:3000/notes/' + noteId).subscribe((res) => {
      console.log('Deleted successfully')
    })
  }

  updateProduct(noteId: any, value: any) {
    return this.http.put('http://localhost:3000/notes/' + noteId, value).subscribe()
  }
}
