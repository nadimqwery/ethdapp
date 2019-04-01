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

  constructor(private ethcontractService: EthcontractService) { }

  ngOnInit() {
    this.initAndDisplayAccount();
  }


  
  initAndDisplayAccount = () => {
    const that = this;
    this.ethcontractService
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
