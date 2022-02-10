import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject:Subject<any> = new Subject<any>();

  sendMessage(message: string){
    this.subject.next({ text:message});
  }

  /*clearMessages() {
    this.subject.next();
  }*/

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
