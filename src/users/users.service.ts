import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  // TODO change users array to a DB
  private users: User[] = [
    {
      id: 1,
      user: 'luisvasquez',
      name: 'Luis Antonio',
      lastname: 'Vasquez Tiu',
      age: 24,
      email: 'luivasquez95@gmail.com',
      password: '123456789',
      roles: ['admin'],
      permissions: ['admindash'],
    },
    {
      id: 2,
      user: 'analucia',
      name: 'Ana Lucia',
      lastname: 'Juarez Lopez',
      age: 22,
      email: 'analuju@gmail.com',
      password: '123456789',
      roles: ['user'],
      permissions: ['userdash'],
    },
  ];

  // * get all users from databse
  getAllUsers() {
    return this.users;
  }
}
