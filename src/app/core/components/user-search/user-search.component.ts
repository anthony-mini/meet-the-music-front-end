import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [NgClass, FormsModule, NgFor, RouterLink],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss',
})
export class UserSearchComponent implements OnInit {
  users: any[] = [];
  searchQuery: string = '';
  isOpen: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers(2).subscribe((users) => {
      this.users = users;
    });
  }

  searchUsers(): void {
    if (this.searchQuery.trim() === '') {
      this.getUsers();
      return;
    } else {
      this.userService.searchUsers(this.searchQuery).subscribe((users) => {
        this.users = users;
      });
    }
  }
}
