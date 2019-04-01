import { Component, OnInit } from '@angular/core';
import { EthcontractService } from '../ethcontract.service';

import { FormGroup, FormControl, FormBuilder, Validators } from '@Angular/forms';
@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit {

   transferForm: FormGroup;
  accounts: any;
  transferFrom = '0x0';
  balance = '0 KON';
  transferTo = '';
  amount = 0;
  remarks = '';

  loading = false;
  submitted = false;


  constructor(private fb: FormBuilder, private ethcontractService: EthcontractService) {
    this.initAndDisplayAccount();
  }

  getTransferForm () {
    return this.transferForm;
  }

  getTransferFrom() {
    return this.transferForm.get('transferFrom');
  }

  getTransferTo() {
    return this.transferForm.get('tranferTo');
  }

  getAmount() {
    return this.transferForm.get('amount');
  }

  ngOnInit() {

    this.transferForm = this.fb.group({
      transferFrom: [''],
      transferTo: [''],
      amount: [''],
    });

  }

  initAndDisplayAccount = () => {
    const that = this;
    this.ethcontractService
      .getAccountInfo()
      .then(function(acctInfo: any) {
        console.log(acctInfo);
        that.transferFrom = acctInfo.fromAccount;
        that.balance = acctInfo.balance;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  transferEther(event) {
    const that = this;
    console.log(this.transferTo);
    this.ethcontractService
      .transferEther(
        this.transferFrom,
        this.transferTo,
        this.amount,
        this.remarks
      )
      .then(function() {
        that.initAndDisplayAccount();
      })
      .catch(function(error) {
        console.log(error);
        that.initAndDisplayAccount();
      });
  }
}
