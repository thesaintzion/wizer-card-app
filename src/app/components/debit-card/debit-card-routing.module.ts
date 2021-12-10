import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitCardComponent } from './debit-card.component';

const routes: Routes = [
  {
    path: '', component: DebitCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebitCardRoutingModule { }
