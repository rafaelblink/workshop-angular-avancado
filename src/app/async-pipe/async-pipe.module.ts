import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncPipeRoutingModule } from './async-pipe-routing.module';
import { AsyncPipeComponent } from './async-pipe.component';
import { HttpClientModule } from '@angular/common/http';
import { BeersService } from './services/beers.service';


@NgModule({
  declarations: [
    AsyncPipeComponent
  ],
  imports: [
    CommonModule,
    AsyncPipeRoutingModule,
    HttpClientModule
  ],
  providers: [BeersService]
})
export class AsyncPipeModule { }
