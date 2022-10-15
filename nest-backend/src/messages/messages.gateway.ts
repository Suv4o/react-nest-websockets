import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { Server } from 'socket.io';
import { OnEvent } from '@nestjs/event-emitter';
@WebSocketGateway({ cors: { origin: '*' } })
export class MessagesGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('createMessage')
  @OnEvent('terms.update')
  termsAndConditionsUpdate(userIds: string[]) {
    return this.messagesService.termsAndConditionsUpdate(this.server, userIds);
  }
}
