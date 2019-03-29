import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';

declare let require: any;
declare let window: any;

let tokenAbi = require('../../../build/contracts/Payment.json');

@Injectable({
  providedIn: 'root'
})

export class EthcontractService {
  private web3Provider: null;
  private contracts: {};


  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }

    window.web3 = new Web3(this.web3Provider);
  }

  getAccountInfo() {
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase(function(err: any, account: any) {

        if(err === null) {
          window.web3.eth.getBalance(account, function(err: any, balance: any) {
            if(err === null) {
              return resolve({fromAccount: account, balance:(window.web3.fromWei(balance, "ether")).toNumber()});
            } else {
              return reject({fromAccount: "error", balance:0});
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
      let paymentContract = TruffleContract(tokenAbi);
      paymentContract.setProvider(that.web3Provider);

      paymentContract.deployed().then(function(instance: { transferFund: (arg0: any, arg1: { from: any; value: any; }) => void; })
       {
          return instance.transferFund(
            _transferTo,
            {
              from:_transferFrom,
              value:window.web3.toWei(_amount, "ether")
            });
        }).then(function(status: any) {
          if(status) {
            return resolve({status:true});
          }
        }).catch(function(error: any){
          console.log(error);

          return reject("Error in transferEther service call");
        });
    });
  }
}
