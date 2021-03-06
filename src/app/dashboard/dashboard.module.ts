import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {PaymentComponent, TransactionComponent, HomeComponent} from './components';
import {DashboardComponent} from './dashboard.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatPaginatorModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {WithFilteringDirective, WithRedirectButtonDirective} from './components/transaction/directives';
import {TransactionService} from './services';
import {PaymentConfirmedComponent} from './components/payment-confirmed/payment-confirmed.component';
import {AbsoluteNumberPipe} from './pipes';

const EXPORTED_DECLARATIONS = [
  DashboardComponent, PaymentComponent, PaymentConfirmedComponent, TransactionComponent, HomeComponent, WithFilteringDirective,
  WithRedirectButtonDirective, AbsoluteNumberPipe,
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
  // Components/Directives (or even Modules) to export (available for other modules; and forRoot() )
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    ReactiveFormsModule, // --> one of these is superfluous, or should be
    FormsModule, // --> one of these is superfluous, or should be
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  exports: EXPORTS,
  providers: [
    // DI Providers (hierarchical)
    // (Services, Tokens, Factories, ...) used from/within this Module; add either here or in forRoot();
    //  * Registers these Classes for the current Module; importing Modules will create new instances (for importing level and below)
    TransactionService
  ]
})

export class DashboardModule {

}
