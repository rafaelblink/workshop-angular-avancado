import { Component, OnInit } from '@angular/core';
import { AttackOnTitanServiceService } from './services/attack-on-titan-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit {

  allTitans$!: Observable<any>;

  constructor(readonly attackTitanService: AttackOnTitanServiceService) { }

  ngOnInit(): void {
    this.attackTitanService.getAll().subscribe(obj => console.log(obj));
  }

}
