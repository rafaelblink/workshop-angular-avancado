import { Component, OnInit } from '@angular/core';

import { Observable, catchError, of, throwError } from 'rxjs';
import { BeersService } from './services/beers.service';
import { IBeer } from './interfaces/beer';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss'],
})
export class AsyncPipeComponent implements OnInit {
  todasCervejas$!: Observable<IBeer[]>;

  constructor(readonly beersService: BeersService) {}

  ngOnInit(): void {
    this.todasCervejas$ = this.beersService.buscarTodasCervejas().pipe(
      catchError((err) => {
        return throwError(() => console.error(err));
      })
    );
  }
}
