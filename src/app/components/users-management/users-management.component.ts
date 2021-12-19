import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from "../../services/user.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  allUsers: User[] = [];

  constructor(private userService: UserService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.userService.all().subscribe((users:User[]) => {
      this.allUsers = users;
      console.log(this.allUsers);
    })
  }

}
