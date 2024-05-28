import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [FormsModule, NgFor, RouterLink],
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

  /**
   * La fonction onFocusOut est utilisée pour fermer le menu déroulant de recherche d'utilisateurs
   * lorsque l'utilisateur clique en dehors du menu ou passe à un autre élément interactif.
   *
   * Pour éviter que le menu ne se ferme avant que le clic sur un lien dans le menu ne soit enregistré,
   * nous utilisons setTimeout pour retarder la fermeture du menu de quelques millisecondes.
   * Cela permet au clic de s'enregistrer avant que le menu ne se ferme.
   */
  onFocusOut() {
    setTimeout(() => {
      this.isOpen = false;
    }, 100);
  }
}
