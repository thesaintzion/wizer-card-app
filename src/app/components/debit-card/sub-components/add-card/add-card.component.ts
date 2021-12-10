import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

export interface Card {
  cardNumber: string,
  cardHoler: string,
  cardExpire: Date,
  cardCVV: string,
}

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  cardForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public sharedService: SharedService) {
    this.cardForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required]],
      cardHoler: ['', [Validators.required]],
      cardExpire: ['', [Validators.required]],
      cardCVV: ['', [Validators.required]],
    })
  }



  handelAddCard():void{
    if(this.cardForm.invalid){
      alert('Please fill in all ')
      return
    }

const updateCard: Card = {
    cardNumber: this.cardForm.value.cardNumber,
    cardHoler: this.cardForm.value.cardHoler ,
    cardExpire: this.cardForm.value.cardExpire,
    cardCVV: this.cardForm.value.cardCVV,
  }
  this.sharedService.card = updateCard;
}

  ngOnInit(): void {
  }

}
