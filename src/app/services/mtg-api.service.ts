import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MtgApiService {

  constructor(private http: HttpClient) { }

  getCardsByName(cardname: string): Observable<any> {
    return this.http.get('https://api.magicthegathering.io/v1/cards?pageSize=9&name=' + cardname);
  }

  getCreatureCardsByName(cardname: string): Observable<any> {
    return this.http.get('https://api.magicthegathering.io/v1/cards?pageSize=9&type=creature&name=' + cardname);
  }

  getSorceryCardsByName(cardname: string): Observable<any> {
    return this.http.get('https://api.magicthegathering.io/v1/cards?pageSize=9&type=sorcery&name=' + cardname);
  }

  getRequestError(): Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/random');
  }
}
