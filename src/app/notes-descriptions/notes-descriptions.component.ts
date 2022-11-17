import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-descriptions',
  templateUrl: './notes-descriptions.component.html',
  styleUrls: ['./notes-descriptions.component.css']
})
export class NotesDescriptionsComponent implements OnInit {

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.onGetData()
  }
  //Getting addMode from notes-name (parent component)
  @Input() addMode: boolean = false

  updateMode: boolean = false;

  currentNoteId: number | any;
  notes: any = []
  @ViewChild('myForm') form: NgForm | any;


  onGetData() {
    this.noteService.fetchData().subscribe((res) => {
      this.notes = res;
    })
  }

  notesCreate(notes: { id: string, title: string, description: string, date: Date }) {
    if (!this.updateMode) {
      this.noteService.createNote(notes);
    } else {
      this.noteService.updateProduct(this.currentNoteId, notes)
      this.updateMode = false
    }
  }

  onDelete(id: number) {
    this.noteService.deleteNote(id)
  }

  onEdit(id: number) {

    this.currentNoteId = id;

    let currentNote = this.notes.find((n: { id: number; }) => { return n.id === id })

    this.form.setValue({
      title: currentNote.title,
      description: currentNote.description,
      date: currentNote.id
    })

    this.updateMode = true;
  }
}
