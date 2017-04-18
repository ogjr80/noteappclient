import { NoteServiceService } from './note-service.service';
import { NoteItem } from './NoteItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notes-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public noteItems: NoteItem[]; 

  ngOnInit(){
      this._dataService.getAll().subscribe((data: NoteItem[])=> {
          this.noteItems = data, 
          () => console.log("getAllItems() complete from init")
      })
  }

  constructor(private _dataService: NoteServiceService) {
    
  }


  title = 'Notes App!';


  // noteItems : NoteItem[] = [
  //   {Id:'1', Body: 'First note', UpdatedOn: '2016-11-21 10:20:23', 
  //    CreatedOn: '2016-11-21 10:20:23', UserId: 1},
  //   {Id:'2', Body: 'Second note with more details', UpdatedOn: '2016-11-21 10:20:23', 
  //    CreatedOn: '2016-11-21 10:20:23', UserId: 1},
  //   {Id:'3', Body: 'Third note, and the last sample', UpdatedOn: '2016-11-21 10:20:23', 
  //    CreatedOn: '2016-11-21 10:20:23', UserId: 1},
  // ];
}
