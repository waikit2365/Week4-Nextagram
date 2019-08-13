import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router'

interface User {
  id: number
  username: string
  profileImage: string
  } 

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  users

  constructor(private userService: UserService, private route: ActivatedRoute){}

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
    this.users = response as User[]
    console.log(this.users)
    })
    } 

}
