import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AuthService, SecurityTokenStore} from './services';
import {AuthResourceService, TokenInterceptor} from './resources';

import {
  LoginComponent, LogoutComponent,
  RegisterComponent
} from './components';
import {SharedModule} from '../shared/shared.module';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule, MatSnackBar, MatSnackBarModule, MatToolbarModule
} from '@angular/material';

// CommonModule contains all the common directives etc. for Angualr, so... yes, it's kinda essential
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardGuard} from './services/dashboard-guard.service';

const EXPORTED_DECLARATIONS = [
  LoginComponent, LogoutComponent, RegisterComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    CommonModule,
    ReactiveFormsModule, // --> one of these is superfluous, or should be
    FormsModule, // --> one of these is superfluous, or should be
    SharedModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports: EXPORTS,
  providers: [AuthResourceService]
})
export class AuthModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        // DI Providers (Services, Tokens, Factories...) to be used globally and instantiate only once

        // TODO: Add services/guards/... here, if additional classes are placed within the Auth moduley
        DashboardGuard,
        AuthService,
        SecurityTokenStore,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }
      ]
    };
  }
}
