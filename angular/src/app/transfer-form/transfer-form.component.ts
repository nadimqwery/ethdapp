import { Component, OnInit } from '@angular/core';
import { EthcontractService } from '../ethcontract.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit {

  accounts: any;
  transferFrom = '0x0';
  balance = '0 KON';
  transferTo = '';
  amount = 0;
  remarks = '';

  submitted = false;
  model = {'transferTo': '','amount': '', 'remarks': '' };

  onSubmit() { this.submitted = true; }

  constructor(private ethcontractService: EthcontractService) {
    this.initAndDisplayAccount();
  }

  ngOnInit() {
    
  }

  initAndDisplayAccount = () => {
    const that = this;
    this.ethcontractService
      .getAccountInfo()
      .then(function (acctInfo: any) {
        console.log(acctInfo);
        that.transferFrom = acctInfo.fromAccount;
        that.balance = acctInfo.balance;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  transferEther() {
    const that = this;
    console.log(this.transferTo);
    this.ethcontractService
      .transferEther(
        this.transferFrom,
        this.transferTo,
        this.amount,
        this.remarks
      )
      .then(function () {
        that.initAndDisplayAccount();
      })
      .catch(function (error) {
        console.log(error);
        that.initAndDisplayAccount();
      });
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
