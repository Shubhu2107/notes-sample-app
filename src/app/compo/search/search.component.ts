import { Component } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm:any;
  notesArray:any[] = [];
  filteredArray:any[] = []
  ngOnInit(): void {
    this.getData()
  }
  constructor(private fetchData : FetchDataService){
  }

  getData(){
    this.fetchData.getData().subscribe(
      (res:any) => {
        for(let note of res.entries){
          this.notesArray.push(note.API)
        }
        console.log(res);
      },err => {
        console.log(err);

      }
    )

  }

  filterData(){
     this.filteredArray = this.notesArray.filter(s => s.includes(this.searchTerm));
     console.log('filtered data', this.filteredArray);
  }


  testlog(){
    console.log('Seach array is', this.notesArray);
  }

}
