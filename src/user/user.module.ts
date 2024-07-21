import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

/**
 * To Do:
 *  - user -> role -> permission -> resource
 *  - jwt -> guard
 * 
 * Reference:
 *  - https://juejin.cn/post/7374238289106927655?searchId=202407142036000D427990CC66916957BB
 */

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
