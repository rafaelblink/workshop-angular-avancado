import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncPipeRoutingModule } from './async-pipe-routing.module';
import { AsyncPipeComponent } from './async-pipe.component';
import { AttackOnTitanServiceService } from './services/attack-on-titan-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AsyncPipeComponent
  ],
  imports: [
    CommonModule,
    AsyncPipeRoutingModule,
    HttpClientModule
  ],
  providers: [AttackOnTitanServiceService]
})
export class AsyncPipeModule { }
