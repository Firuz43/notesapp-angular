import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  //Fetching data from our db.json making get request

  fetchData() {
    return this.http.get('http://localhost:3000/notes')
  }

  // Making post request to our db.json
  createNote(notes: { id: string, title: string, description: string, date: Date }) {
    this.http.post('http://localhost:3000/notes', notes).subscribe((res) => {
    })
  }

  // Sending delete request 
  deleteNote(noteId: any) {
    return this.http.delete('http://localhost:3000/notes/' + noteId).subscribe((res) => {
    })
  }

  // Making put request changing notes in database (db.json)
  updateProduct(noteId: any, value: any) {
    return this.http.put('http://localhost:3000/notes/' + noteId, value).subscribe()
  }
}
