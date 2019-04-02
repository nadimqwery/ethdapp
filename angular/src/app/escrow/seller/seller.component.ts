import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {EthcontractService} from '../../ethcontract.service';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {


  sellerAddress = '0x0';
  escrowAddress = '';
  amount = 0;
  remarks = '';

  submitted = false;
  model = {'sellerAddress': '', 'escrowAddress': '', 'amount' : '0',  'remarks': '' };

  onSubmit() { this.submitted = true; }
  constructor(private ethcontractService: EthcontractService) {
  }

  ngOnInit() {
    this.initAndDisplayAccount();

  }

  initAndDisplayAccount = () => {
    const that = this;
    this.ethcontractService

      .getAccountInfo()
      .then(function (acctInfo: any) {

        that.sellerAddress = acctInfo.fromAccount;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  initiateEscrow = () => {
    console.log('test');
  }


}
