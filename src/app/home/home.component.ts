import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  message: string = '';

  constructor(private MessageService: MessageService) { }

  ngOnInit(): void {
  }

  sendMessage()
  {
  
    this.MessageService.sendMessage(this.message);
    this.message = '';
  }

}