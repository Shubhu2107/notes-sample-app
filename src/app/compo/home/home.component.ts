import { Component } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import {
	HttpClientModule,
	HttpClient,
	HttpErrorResponse,
} from '@angular/common/http';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	ngOnInit(): void {
		this.getData();
		this.saveNotes();
	}
	constructor(
		private fetchData: FetchDataService,
		private http: HttpClient
	) {}
	
	result!: String;
	searchTerm: any;
	notesArray: any[] = [];
	hideNoteContainer:boolean = false;

	closeNoteBlock(){
		this.hideNoteContainer = true;
	}
	// add a logic of host listener for checking mouse click outside div
	// read about click logic & host listner in angular
	getData() {
		this.fetchData.getData().subscribe((data) => {
			console.log(data);
		});
	}
	userinsertData: string = '';
	userInputData(data: any) {
		this.userinsertData = (<HTMLInputElement>data.target).value;
	}
	postData() {
		this.http
			.post('http://localhost:3000/posts', {
				note: this.userinsertData,
			})
			.toPromise()
			.then((data: any) => {
				this.result = JSON.stringify(data.json.name);
			});
	}
	// use a fail safe logic to implement this condition
	saveNotes() {
		if (this.searchTerm !== undefined && this.searchTerm !== '') {
			this.notesArray.push(this.searchTerm);
			// logic to be added for post call
			this.fetchData.addNote('').subscribe((data) => {
				console.log(data);
			});
		} else {
			console.log('null entry');
		}
		console.log(this.notesArray);
	}
}
