import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SnackbarService } from '../services/snackbar.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: any = FormGroup;
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBarService: SnackbarService,
    public dialogRef: MatDialogRef<LoginComponent>,
    private ngxService: NgxUiLoaderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, [Validators.required]],
    });
  }

  handleSubmit() {
    this.ngxService.start();
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password
    }

    this.userService.login(data).subscribe((response:any) => {
      this.ngxService.stop();
      this.dialogRef.close();
      localStorage.setItem('token', response.token);
      this.router.navigate(['/casa-thalia-decor/dashboard']);
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackBarService.openSnackbar(this.responseMessage, GlobalConstants.error);
    })
  }
}
