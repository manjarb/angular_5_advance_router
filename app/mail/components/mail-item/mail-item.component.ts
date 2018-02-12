import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
    <a class="mail-item"
       (click)="navigateToMessage()">
       <!--[routerLink]="['', { outlets: { pane: ['message', message.id ] } }]"
       routerLinkActive="active">-->
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date:'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `
})
export class MailItemComponent {
  @Input()
  message: Mail;
  constructor(private router: Router) {}
  navigateToMessage() {
    this.router.navigate(
      ['', { outlets: { pane: ['message', this.message.id] }}]
    )
  }
}