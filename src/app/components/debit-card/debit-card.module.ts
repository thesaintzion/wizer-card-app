import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebitCardRoutingModule } from './debit-card-routing.module';
import { DebitCardComponent } from './debit-card.component';
import { AddCardComponent } from './sub-components/add-card/add-card.component';
import { SingleCardComponent } from './sub-components/single-card/single-card.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    DebitCardComponent,
    AddCardComponent,
    SingleCardComponent
  ],
  imports: [
    CommonModule,
    DebitCardRoutingModule,
    SharedModule
  ]
})
export class DebitCardModule { }
