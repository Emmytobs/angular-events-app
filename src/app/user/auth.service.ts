import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser: IUser;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    const loginInfo = { username: userName, password: password };
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap((data) => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError((err) => {
        // Creates an observable of false, which gets executed when the post request returns an error.
        return of(false);
      }));
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  // Makes an http request to an endpoint that sends the user's current data
  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = <IUser>data;
        }
      }))
      .subscribe();
  }

  logout() {

    this.currentUser = undefined;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post('/api/logout', {}, options);
  }

}
