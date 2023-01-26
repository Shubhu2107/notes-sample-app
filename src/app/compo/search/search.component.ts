import { Component } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  ngOnInit(): void {
    this.getData()
  }
  constructor(private fetchData : FetchDataService){
  }

  getData(){
    this.fetchData.getData().subscribe(
      res => {
        console.log(res);
      },err => {
        console.log(err);

      }
    )

  }

}
