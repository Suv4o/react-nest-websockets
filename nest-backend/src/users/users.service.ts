import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class UsersService {
  constructor(private eventEmitter: EventEmitter2) {}

  async findAll() {
    this.eventEmitter.emit('terms.update', ['1', '2', '3']);
    return ['test'];
  }
}
