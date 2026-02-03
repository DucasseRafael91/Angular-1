import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../components/user/user.model';
import { environment } from '../../../Environnement';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {

  constructor(private readonly http:HttpClient) { }

  public getUsers(){
    return this.http.get<User[]>(environment.host+'/users');
  }

  public getUserById(id:number){
    return this.http.get<User>(environment.host+'/users/'+id);
  }

public getUserByMail(mail: string) {
  return this.http.get<User[]>(
    `${environment.host}/users?mail=${mail}`
  );
}

}