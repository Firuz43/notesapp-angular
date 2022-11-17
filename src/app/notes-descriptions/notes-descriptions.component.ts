import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-descriptions',
  templateUrl: './notes-descriptions.component.html',
  styleUrls: ['./notes-descriptions.component.css']
})
export class NotesDescriptionsComponent implements OnInit {

  // Storing NotesService to notesService variable
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.onGetData()
  }
  // Getting addMode from notes-name (parent component)
  @Input() addMode: boolean = false

  // Keep tracking updateMode
  updateMode: boolean = false;

  // Making property and recieving id from onEdit() method
  currentNoteId: number | any;

  // Creating notes property for storing data from server
  notes: any = []

  // Making @Viewchild for for using form values in input forms to update
  @ViewChild('myForm') form: NgForm | any;


  // Getting data from server (db.json) and storing it to our notes variable
  onGetData() {
    this.noteService.fetchData().subscribe((res) => {
      this.notes = res;
    })
  }

  // notesCreate inside has updateProduct also if the updateMethod is false we are calling createNote() method
  // else if updateMode is true we are calling updateProduct
  notesCreate(notes: { id: string, title: string, description: string, date: Date }) {
    if (!this.updateMode) {
      this.noteService.createNote(notes);
    } else {
      this.noteService.updateProduct(this.currentNoteId, notes)
      this.updateMode = false
    }
  }

  // Delet method making call to noteService passing id to it and deleting note
  onDelete(id: number) {
    this.noteService.deleteNote(id)
  }

  // Here we are recieving id from view and the passing it to our currentNoteId
  onEdit(id: number) {

    // currentNoteId recieving id from view
    this.currentNoteId = id;

    // Here when we are recieving id from view we are checking using find() method based on 
    //id and storing it to our currentNote
    let currentNote = this.notes.find((n: { id: number; }) => { return n.id === id })

    // When we got the currentNot that we got from view we are filling it's value to a form using setValue()
    this.form.setValue({
      title: currentNote.title,
      description: currentNote.description,
      date: currentNote.id
    })

    //Turning on updateMethod
    this.updateMode = true;
  }
}
