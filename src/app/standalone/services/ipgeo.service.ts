import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpGeoService {

  constructor(readonly http: HttpClient) { }

  // meuIP = '179.186.143.18';

  buscarDadosIP(): Observable<any[]> {
    return this.http.get<any[]>(`https://api.techniknews.net/ipgeo/`).pipe(
      shareReplay()
    );
  }
}
