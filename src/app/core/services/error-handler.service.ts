import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  handleError(error: any) {
    console.error('handlerError:', error);

    if (error.status === 401) {
      this.router.navigate(['']);
    } else {
      this.snackBar.open(
        error.message || "Une erreur inconnue s'est produite",
        'Fermer',
        {
          duration: 3000,
        },
      );
    }
  }
}
