import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class FetchDataService {
	constructor(private http: HttpClient) {}
	getData() {
		return this.http.get('http://localhost:3000/entries');
		
	}
	// check what is required in a post call & push new note in following function
	addNote(data: any) {
		return this.http.post('http://localhost:3000/entries', data);
	}
}
