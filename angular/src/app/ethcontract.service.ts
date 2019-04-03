import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';

import { GlobalDataService } from './global-data.service';

declare let require: any;
declare let window: any;

const tokenAbiPayment = require('../../../build/contracts/Payment.json');

const tokenAbiEscrowDB = require('../../../build/contracts/EscrowDB.json');

@Injectable({
  providedIn: 'root'
})

export class EthcontractService {
  private web3Provider: null;
  private contracts: {};

  constructor(private globalDataService: GlobalDataService) {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      //this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      this.web3Provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/a52d89d7f34947b8b1f4a62f10299533');
    }

    //window.web3 = new Web3(this.web3Provider);
    window.web3 = new Web3('https://ropsten.infura.io/v3/a52d89d7f34947b8b1f4a62f10299533');
  }

  getAccountInfo() {
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase(function (err: any, account: any) {

        if (err === null) {
          window.web3.eth.getBalance(account, function (err: any, balance: any) {
            if (err === null) {
              return resolve({ fromAccount: account, balance: (window.web3.fromWei(balance, "ether")).toNumber() });
            } else {
              return reject({ fromAccount: "error", balance: 0 });
            }
          });
        }
      });
    });
  }

  transferEther(
    _transferFrom: string,
    _transferTo: string,
    _amount: number,
    _remarks: string
  ) {
    let that = this;

    return new Promise((resolve, reject) => {
      let paymentContract = TruffleContract(tokenAbiPayment);
      paymentContract.setProvider(that.web3Provider);

      paymentContract.deployed().then(function (instance: { transferFund: (arg0: any, arg1: { from: any; value: any; }) => void; }) {
        return instance.transferFund(
          _transferTo,
          {
            from: _transferFrom,
            value: window.web3.toWei(_amount, "ether")
          });
      }).then(function (status: any) {
        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error: any) {
        console.log(error);

        return reject("Error in transferEther service call");
      });
    });
  }

  RegisterSeller(_name, _address) {
    let that = this;
    let escrowDBContract = TruffleContract(tokenAbiEscrowDB);
    escrowDBContract.setProvider(that.web3Provider);
    let fd = escrowDBContract.at(that.globalDataService.shareObj['EscrowDBAddress']);
    fd.registerSeller(_name,
      {
        from: _address
      });
  }


  RegisterBuyer(_name, address) {
    let that = this;
    let escrowDBContract = TruffleContract(tokenAbiEscrowDB);
    escrowDBContract.setProvider(that.web3Provider);
    let fd = escrowDBContract.at(that.globalDataService.shareObj['EscrowDBAddress']);
    fd.registerBuyer(_name,
      {
        from: address
      });
  }

  RegisterEscrow(_name, address) {
    let that = this;
    let escrowDBContract = TruffleContract(tokenAbiEscrowDB);
    escrowDBContract.setProvider(that.web3Provider);
    let fd = escrowDBContract.at(that.globalDataService.shareObj['EscrowDBAddress']);
    fd.registerEscrow(_name,
      {
        from: address
      });
  }

  getSellerName (_address) {



      let that = this;
      let escrowDBContract = TruffleContract(tokenAbiEscrowDB);
      escrowDBContract.setProvider(that.web3Provider);
       return escrowDBContract.at(that.globalDataService.shareObj['EscrowDBAddress']).sellerList[_address];

      
  }

  getBuyerName(_address) {
    let that = this;
    let escrowDBContract = TruffleContract(tokenAbiEscrowDB);
    escrowDBContract.setProvider(that.web3Provider);
    let fd = escrowDBContract.at(that.globalDataService.shareObj['EscrowDBAddress']);
    let name = fd.getBuyerFullInfo(_address);
    return name;
  }
 

  getEscrowFullInfo(_address) {
    let that = this;
    let escrowDBContract = TruffleContract(tokenAbiEscrowDB);
    escrowDBContract.setProvider(that.web3Provider);
    let fd = escrowDBContract.at(that.globalDataService.shareObj['EscrowDBAddress']);
    let name = fd.getSellerFullInfo(_address);
    return name;
  }

}

