import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
//
export class NoteComponent implements OnInit {


  constructor(private notesService: NotesService, private acitavatedRoute: ActivatedRoute, private http: HttpClient) { }


  note: any | undefined = [];
  noteId: any;
  notes: any = [];

  addMode: boolean = false

  ngOnInit() {
    this.notes = new Promise((resolve, reject) => {
      resolve(this.http.get('http://localhost:3000/notes').subscribe((res: any) => {
        this.notes = res

        this.noteId = this.acitavatedRoute.snapshot.paramMap.get('id');
        this.note = this.notes.find((p: { id: any; }) => p.id == this.noteId)

      }))

      this.acitavatedRoute.queryParams.subscribe((params: any) => {
        this.addMode = params
      })


    });


    // this.noteId = this.acitavatedRoute.snapshot.paramMap.get('id');
    // this.note = this.notes.find((p: { id: any; }) => p.id === this.noteId)
    // console.log(this.notes)
    // console.log(this.note)

  }

  onProductsFetch() {
    this.notes = new Promise((resolve, reject) => {
      resolve(this.http.get('http://localhost:3000/notes').subscribe((res: any) => {
        this.notes = res
        this.noteId = this.acitavatedRoute.snapshot.paramMap.get('id');
        this.note = this.notes.find((p: { id: any; }) => p.id == this.noteId)
      }))
    })
  }


  getData() {
    this.notesService.fetchData().subscribe((res) => {
      this.notes = res
    })
  }
}
