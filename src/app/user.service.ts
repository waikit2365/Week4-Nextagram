import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = []
  currentUser = null

  constructor(private http: HttpClient) {
    this.getUsers().subscribe((value) => {
      this.users = value as any
    })
  }
  
  getUsers(){
    return this.http.get("https://insta.nextacademy.com/api/v1/users/")
  }
  
  // getUser(){
  //   return this.currentUser
  // }  

  // setCurrentUser(index){
  //   this.currentUser = this.users[index]
  // }

  // getUserByIndex(index){
  //   return this.users[index]
  // }

}