import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuerreStellariService {

  constructor(private http: HttpClient) { }

  searchItems(query: string) {
    const url = `https://www.swapi.tech/api/${query}`
    return this.http.get(url)
    

  }
}
