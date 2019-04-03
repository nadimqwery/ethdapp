import { Component, OnInit } from '@angular/core';

import { EthcontractService } from '../ethcontract.service';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent implements OnInit {

  accountAddress: any;
  accountBalance: any;
  accountName:any;

  constructor(private ethcontractService: EthcontractService) {

    this.initAndDisplayAccount();

   }

  ngOnInit() {
    this.initAndDisplayAccount();
    this.getSellerName(this.accountAddress);
  }

  getSellerName = (accountAddress: any) => {
    const that = this;
    this.accountName =   that.ethcontractService
      .getSellerName(accountAddress);


  }


  
  initAndDisplayAccount = () => {
    const that = this;
    that.ethcontractService
      .getAccountInfo()
      .then(function(acctInfo: any) {
        console.log(acctInfo);
        that.accountAddress = acctInfo.fromAccount;
        that.accountBalance = acctInfo.balance;
       
      })
      .catch(function(error) {
        console.log(error);
      });
  }

}
