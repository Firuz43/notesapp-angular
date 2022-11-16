import { Component, OnInit } from '@angular/core';
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

  onGetData() {
    this.http.fetchData().subscribe((res) => {
      console.log(res)
    })
  }

}
