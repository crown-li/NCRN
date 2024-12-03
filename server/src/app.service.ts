import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStart(): string {
    return 'NextJs(React)+Chakra Ul+Redux Toolkit+Node(NestJS)';
  }
}
