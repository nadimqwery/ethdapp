import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {
  isCertainButtonAlreadyActive: any;
  constructor() { }

  ngOnInit() {
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
