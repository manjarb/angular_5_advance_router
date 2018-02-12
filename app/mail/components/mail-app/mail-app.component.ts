import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <router-outlet
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)">
      </router-outlet>
    </div>
    <div class="mail">
      <router-outlet name="plane">
      </router-outlet>
    </div>
  `
})
export class MailAppComponent {
  onActivate(event) {

  }
  onDeactivate(event) {

  }
}
