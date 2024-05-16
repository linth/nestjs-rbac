import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  async initData() {
    console.log('initData function');

    const user1 = new User()
    user1.username = 'user1'
    user1.password = '1111'

    const user2 = new User()
    user2.username = 'user2'
    user2.password = '2222'

    const user3 = new User()
    user3.username = 'user3'
    user3.password = '3333'

  }

  async login() {
    console.log('login function');
  }

  async findRoleByIds(roleIds: number) {
    console.log('findRoleByIds function, role ID: ', roleIds);
  }

  findOne(id: number) {
    console.log('findOne function');
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log('update function');
  }

  remove(id: number) {
    console.log('remove function');
  }
}
