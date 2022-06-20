import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api: string = `${environment.apiUrl}`;
  constructor(
    private httpClient: HttpClient
  ) { }


   apiGetAllUsers() {
    return this.httpClient.get<User[]>(`${this.api}?results=10`);
    //asi puedo reformatear lo que llega del resultado puede ser any o User
    /* .pipe(
      map((res: any) => res.results.map((user: any) => {
          return {
            gender: user.gender,
            name: user.name,
            email: user.email,
            registered: user.registered,
            phone: user.phone,
            picture: user.picture,
            nat: user.nat,
          }
      }))
    ) */
  }

  apiGetUser(id: string){
    id = '1';
    return this.httpClient.get<User>(`${this.api}?results=${id}`);
  }
}
