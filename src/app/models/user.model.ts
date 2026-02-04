export class User {
  mail: string;
  password: string
  roles: string[];

  constructor(mail: string, password: string, roles: string[]) {
    this.mail = mail;
    this.password = password;
    this.roles = roles;
  }
}
