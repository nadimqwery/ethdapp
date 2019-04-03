import { Component, OnInit } from '@angular/core';
import {EthcontractService} from '../../ethcontract.service';

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
  constructor(private ethcontractService: EthcontractService) { }

  ngOnInit() {
  }

  onSubmit() {
  
  }
  registerSeller = () => {
    const that = this;
    that.ethcontractService
      .RegisterBuyer(this.model.sellerName, this.model.sellerAddress)
      .then(function() {
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  

}
