import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-names',
  templateUrl: './notes-names.component.html',
  styleUrls: ['./notes-names.component.css']
})
export class NotesNamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  addMode: boolean = false;


  addNote(): void {
    console.log('Added new note')
    this.addMode = true
  }

  goBack(): void {
    this.addMode = false
  }
}
