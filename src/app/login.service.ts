import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: Users[] = [];

  addUser(email: string, password: string) {
    if (email && password) {
      let user: Users = { email, password };
      this.users.push(user);
    }
  }

  isUser(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    return user !== undefined;
  }

  constructor() { }
}

interface Users {
  email: string;
  password: string;
}
