import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-names',
  templateUrl: './notes-names.component.html',
  styleUrls: ['./notes-names.component.css']
})
export class NotesNamesComponent implements OnInit {

  constructor(private http: NotesService) { }


  notes: any = []
  searchText: string = '';


  ngOnInit(): void {
    this.getData()
  }



  addMode: boolean = false;


  addNote(): void {
    console.log('Added new note')
    this.addMode = true
  }

  goBack(): void {
    this.addMode = false
  }

  getData() {
    this.http.fetchData().subscribe((res) => {
      console.log(res)
      this.notes = res
    })
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
}
