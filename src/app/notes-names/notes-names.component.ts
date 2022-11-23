import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-names',
  templateUrl: './notes-names.component.html',
  styleUrls: ['./notes-names.component.css']
})
export class NotesNamesComponent implements OnInit {

  // passing NotesService to variable http
  constructor(private http: NotesService, private router: Router) { }


  // Recieving data from db.json
  notes: any = []

  // Keep tracking for search functionality
  searchText: string = '';

  // Creating a property for tracking addMode
  addMode: boolean = false;

  fetchProduct: boolean = false;

  ngOnInit(): void {
    this.getData()
  }



  // Turning off the addMode
  goBack(): void {
    this.addMode = false
  }

  goTo() {
    this.router.navigate(['description'], { queryParams: { data: this.addMode = false } })
  }

  goto(id: any) {
    this.router.navigate(['/note', id], { queryParams: { data: this.fetchProduct = true } })
  }

  // Making request using HttpClient for getting data from dj.json
  getData() {
    this.http.fetchData().subscribe((res) => {
      this.notes = res
    })
  }

  // Passing searchText to our function
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
}
