import { Injectable } from '@angular/core';
import { Card } from '../components/debit-card/sub-components/add-card/add-card.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  card: Card = {
    cardNumber: '3454 3222 6789 3789',
    cardHoler: 'Name ',
    cardExpire: new Date(),
    cardCVV: '345',
  }


  constructor() { }
}
