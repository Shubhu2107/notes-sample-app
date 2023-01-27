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
  filteredArray:any[] = [];
  filteredArrayVar:any;
  mappedArray:any[] = [];
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
     console.log('notes data', this.notesArray);
     console.log('filtered data', this.filteredArray);
    }

    findData(){
      this.filteredArray = this.notesArray.find(s => s.includes(this.searchTerm));
      console.log('find data', this.filteredArray);
    }
    mapData(){
      this.notesArray.map(s => {
        if(s.includes(this.searchTerm)){
          this.mappedArray.push(s)
        }else{
          console.log('not pushed', s);
        }
      });
      console.log('notes array data', this.notesArray);
      console.log('map array data', this.mappedArray);
    }

    reduceData(){
    this.filteredArrayVar = this.notesArray.reduce((a,c) => {return a + c});
    console.log(this.filteredArrayVar);
  }

  testlog(){
    console.log('Seach array is', this.notesArray);
  }

}
