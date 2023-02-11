import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { GendersComponent } from './genders.component';
import { SharedModule } from "../shared/shared.module";
import { LandingComponent } from './landing.component';
 


@NgModule({
    declarations: [
        GendersComponent,
        LandingComponent,
  
         
    ],
    imports: [
        CommonModule,
        MasterRoutingModule,
        SharedModule
    ]
})
export class MasterModule { }
