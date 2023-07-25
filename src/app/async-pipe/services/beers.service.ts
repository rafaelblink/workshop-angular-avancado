import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { IBeer } from '../interfaces/beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(readonly http: HttpClient) { }

  buscarTodasCervejas(): Observable<IBeer[]> {
    return this.http.get<IBeer[]>('https://api.punkapi.com/v2/beers').pipe(
      shareReplay()
    );
  }
}
