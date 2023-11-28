import { Component } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(
    public messageService: MessageService // here we have set it as public as we will use it in template
    // NOTE - Angular only binds to public component properties
  ) {}

}
