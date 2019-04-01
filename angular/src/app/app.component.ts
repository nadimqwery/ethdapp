import { Component } from '@angular/core';
import { EthcontractService } from './ethcontract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ethereum Transfer App';
  isCertainButtonAlreadyActive: any;
  activeButton: any;
  constructor(private ethcontractService: EthcontractService) {

  }

  onButtonGroupClick($event) {
    const clickedElement = $event.target || $event.srcElement;
    console.log(clickedElement);
    if ( clickedElement.nodeName === 'A' ) {
      this.isCertainButtonAlreadyActive = clickedElement.parentElement.parentElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if ( this.isCertainButtonAlreadyActive ) {
        console.log(this.isCertainButtonAlreadyActive);
        this.isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
    }

  }


}
