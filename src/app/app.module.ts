import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EditAccountsComponent } from './edit-accounts/edit-accounts.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EditAccountsComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
