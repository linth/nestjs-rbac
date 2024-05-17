import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './entities/permission.entity';
import { Role } from './entities/role.entity';
import { Resource } from './entities/resource.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async initData() {
    console.log('initData function');

    const user1 = new User();
    user1.username = 'user1';
    user1.password = '1111';

    const user2 = new User();
    user2.username = 'user2';
    user2.password = '2222';

    const user3 = new User();
    user3.username = 'user3';
    user3.password = '3333';
    
    const permision1 = new Permission();
    permision1.name = '新增';
    const permision2 = new Permission();
    permision2.name = '修改';
    const permision3 = new Permission();
    permision3.name = '刪除';

    // admin
    const role1 = new Role();
    role1.name = 'admin';
    // general_user
    const role2 = new Role();
    role2.name = 'general_user';
    
    const resource1 = new Resource();
    resource1.name = 'app1'
    const resource2 = new Resource();
    resource1.name = 'app2'
    const resource3 = new Resource();
    resource3.name = 'thing1'
    const resource4 = new Resource();
    resource4.name = 'thing2'

    permision1.resource = [resource1, resource2, resource3, resource4]
    role1.permissions = [permision1, permision2, permision3];
    user1.role = [role1];

    permision2.resource = [resource3, resource4]
    role2.permissions = [permision1, permision2];
    user2.role = [role2];

    // await this.repo.save();
    // await this.repo.save();
  }

  async login(loginUserDto: LoginUserDto): Promise<User> {
    console.log('login function');
    const user = await this.repo.findOne({
      where: {
        username: loginUserDto.username
      },
      // relations: ['roles']
    });

    if (!user) { throw new HttpException('not existed', HttpStatus.ACCEPTED); }
    if (user.password !== loginUserDto.password) {
      throw new HttpException('error password', HttpStatus.ACCEPTED);
    }
    return user;
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

  async findAll(): Promise<User[]> {
    return this.repo.find();
  }
}
