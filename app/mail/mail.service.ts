import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import { Mail } from './models/mail.interface';

import 'rxjs/add/operator/map';

@Injectable()
export class MailService {
  constructor(private http: Http) {

  }

  getFolder(folder: string): Observable<Mail[]> {
    return this.http
      .get(`/api/message?folder=${folder}`)
      .map(response => response.json());

  }

  getMessage(id: string): Observable<Mail> {
    return this.http
      .get(`/api/message/${id}`)
      .map(response => response.json());
  }
}
