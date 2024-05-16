import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('login')
  login() {
    return this.userService.login();
  }

  @Get('findRoleByIds')
  findRoleByIds() {
    return this.userService.findRoleByIds(1);
  }
}
