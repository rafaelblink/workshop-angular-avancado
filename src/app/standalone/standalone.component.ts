import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpGeoService } from './services/ipgeo.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  imports: [CommonModule, HttpClientModule],
  providers: [IpGeoService],
  standalone: true,
})
export class StandaloneComponent implements OnInit {
  constructor(readonly ipgeoService: IpGeoService) {}

  ipData$!: Observable<any>;

  ngOnInit() {
    this.ipData$ = this.ipgeoService.buscarDadosIP();
  }
}
