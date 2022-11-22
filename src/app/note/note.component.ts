import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {


  constructor(private notesService: NotesService, private acitavatedRoute: ActivatedRoute, private http: HttpClient) { }


  note: any = [];
  noteId: any;
  notes: any = [];


  ngOnInit() {
    this.notes = new Promise((resolve, reject) => {
      resolve(this.http.get('http://localhost:3000/notes').subscribe((res: any) => {
        this.notes = res
        console.log(this.notes)

        this.noteId = this.acitavatedRoute.snapshot.paramMap.get('id');
        return this.note = this.notes.find((p: { id: any; }) => p.id === this.noteId)
      }))

    });


    // this.noteId = this.acitavatedRoute.snapshot.paramMap.get('id');
    // this.note = this.notes.find((p: { id: any; }) => p.id === this.noteId)
    // console.log(this.notes)
    // console.log(this.note)

  }

  getData() {
    this.notesService.fetchData().subscribe((res) => {
      this.notes = res
      console.log(this.notes)
    })
  }
}
