import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {InlineNotification} from './notifications';

@Component({
  selector: 'app-inline-notification',
  templateUrl: './inline-notification.component.html',
  styleUrls: ['./inline-notification.component.scss']
})
export class InlineNotificationComponent implements OnInit {

  @Input()  notifications: InlineNotification[];
  @Output() OnNotificationRemoved = new EventEmitter<InlineNotification[]>();

  constructor() {
  }
  ngOnInit() {
  }
  remove(notification) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
    this.OnNotificationRemoved.emit(this.notifications);
  }

}
