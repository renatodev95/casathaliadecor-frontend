import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snakcbar: MatSnackBar) {}

  openSnackbar(message: string, action: string) {
    if (action === 'error') {
      this.snakcbar.open(message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['black-snackbar'],
      });
    } else {
      this.snakcbar.open(message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['green-snackbar'],
      });
    }
  }
}
