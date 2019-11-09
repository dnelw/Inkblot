import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  url = 'http://localhost:5001'

  constructor(private http: HttpClient) {
    this.getData().subscribe(data => {
      console.log(data);
    });
  }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
