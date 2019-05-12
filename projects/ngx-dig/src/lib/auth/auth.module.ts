import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthEmailSigninComponent } from './auth-email-signin/auth-email-signin.component';
import { AuthGoogleSigninComponent } from './auth-google-signin/auth-google-signin.component';
import { AuthSignoutComponent } from './auth-signout/auth-signout.component';

@NgModule({
  declarations: [AuthEmailSigninComponent, AuthGoogleSigninComponent, AuthSignoutComponent],
  exports: [AuthEmailSigninComponent, AuthGoogleSigninComponent, AuthSignoutComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
