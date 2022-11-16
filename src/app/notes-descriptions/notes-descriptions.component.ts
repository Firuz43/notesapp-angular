import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-descriptions',
  templateUrl: './notes-descriptions.component.html',
  styleUrls: ['./notes-descriptions.component.css']
})
export class NotesDescriptionsComponent implements OnInit {

  constructor(private http: NotesService) { }

  ngOnInit(): void {
    this.onGetData()
  }
  //Getting addMode from notes-name (parent component)
  @Input() addMode: boolean = false

  notes: any = []

  onGetData() {
    this.http.fetchData().subscribe((res) => {
      console.log(res)
      this.notes = res;
    })
  }

  notesCreate(notes: { id: string, title: string, description: string, date: Date }) {
    if (this.addMode) {
      this.http.createNote(notes);
      console.log('added successfully')
    }
  }

}
