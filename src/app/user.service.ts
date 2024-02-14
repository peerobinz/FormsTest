import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registeredUsers: { username: string, password: string }[] = [];

  constructor() { }

  register(username: string, password: string) {
    this.registeredUsers.push({ username, password });
  }

  getRegisteredUsers() {
    return this.registeredUsers;
  }
}
