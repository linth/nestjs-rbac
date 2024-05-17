import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('initData')
  initData(): void {
    this.userService.initData();
  }

  @Get('login')
  login(@Body() loginUserDto: LoginUserDto) {
    const user = this.userService.login(loginUserDto);
    console.error('user', user);
    return user;
  }

  @Get('findRoleByIds')
  findRoleByIds() {
    return this.userService.findRoleByIds(1);
  }

  @Get('findAll')
  findAll() {
    return this.userService.findAll();
  }
}
