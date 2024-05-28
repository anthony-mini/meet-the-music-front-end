import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-cards',
  standalone: true,
  imports: [FormsModule, NgFor, RouterLink],
  templateUrl: './profile-cards.component.html',
  styleUrl: './profile-cards.component.scss',
})
export class ProfileCardsComponent implements OnInit {
  users: any[] = [];
  searchQuery: string = '';
  isOpen: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getArtistUsers();
  }

  getArtistUsers(): void {
    this.userService.getArtistUsers(6).subscribe((users) => {
      this.users = users;
    });
  }
}
