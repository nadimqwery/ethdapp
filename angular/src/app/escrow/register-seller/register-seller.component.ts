import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  sellerAddress: any;
  sellerName: any;
  remarks: any;

  submitted = false;
  model = {'sellerAddress': '','sellerName': '',  'remarks': '' };
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('nadim');
  }
  registerSeller() {
    console.log('nadim');
  }

}
