import { Component } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import { ActivatedRoute } from "@angular/router";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/pluck';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view">
      <h2>{{ (ssage | async).from }}</h2>
      <h2>{{ (message | async).full }}</h2>
    </div>
  `
})
export class MailViewComponent {
  messages: Observable<Mail> = this.route.data.pluck('message');
  constructor(private route: ActivatedRoute) {}
}
