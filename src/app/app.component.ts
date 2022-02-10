import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'app-practice';
  subscription: Subscription = new Subscription;
  messages: any[] = [];

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.onMessage().subscribe(message => {
      this.messages.push(message);
    }
  )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
