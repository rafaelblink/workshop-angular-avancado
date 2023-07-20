import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttackOnTitanServiceService {

  constructor(readonly http: HttpClient) { }

  getAll() {
    return this.http.get('https://api.attackontitanapi.com/characters');
  }
}
