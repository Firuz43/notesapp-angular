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

  deleteNote(id: number) {
    return this.http.delete('http://localhost:3000/notes/' + id).subscribe((res) => {
      console.log('Deleted successfully')
    })
  }
}
