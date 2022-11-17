import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-names',
  templateUrl: './notes-names.component.html',
  styleUrls: ['./notes-names.component.css']
})
export class NotesNamesComponent implements OnInit {

  constructor(private http: NotesService) { }


  // Recieving data from db.json
  notes: any = []

  // Keep tracking for search functionality
  searchText: string = '';

  // Creating a property for tracking addMode
  addMode: boolean = false;


  ngOnInit(): void {
    this.getData()
  }

  // Truning on the addMode
  addNote(): void {
    this.addMode = true
  }

  // Turning off the addMode
  goBack(): void {
    this.addMode = false
  }

  // Making request using HttpClient for getting data from dj.json
  getData() {
    this.http.fetchData().subscribe((res) => {
      this.notes = res
    })
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
}
