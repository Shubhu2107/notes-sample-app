import { Component } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit(): void {
    this.getData()
  }
  constructor(private fetchData : FetchDataService){
  }

  searchTerm:any;
  notesArray:any[] =[]

  // add a logic of host listener for checking mouse click outside div
  // read about click logic & host listner in angular
  getData(){
    this.fetchData.getData().subscribe(
     data => {
      console.log(data);
     }
    )

  }
  // use a fail safe logic to implement this condition
  saveNotes(){
    if(this.searchTerm !== undefined && this.searchTerm !== ''){
      this.notesArray.push(this.searchTerm)
      // logic to be added for post call
      this.fetchData.addNote().subscribe(
        data => {
          console.log(data);
        }
      )
    }else{
      console.log('null entry');
    }
    console.log(this.notesArray);
  }

}
