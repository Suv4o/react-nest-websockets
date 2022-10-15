import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class MessagesService {
  termsAndConditionsUpdate(socketServer: Server, userIds: string[]) {
    return socketServer.emit('termsUpdates', userIds);
  }
}
