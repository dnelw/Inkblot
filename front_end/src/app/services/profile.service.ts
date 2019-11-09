import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _jsonUrl = "assets/profile.json";


  constructor(private http: HttpClient) {
    this.getProfile().subscribe(data => {
      console.log(data);
    });
  }

  getProfile(): Observable<any> {
    return this.http.get(this._jsonUrl);
  }
}
