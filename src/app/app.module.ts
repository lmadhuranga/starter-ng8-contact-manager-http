import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ContactsComponent } from './components/list-contacts/list.component'
import { ViewContactComponent } from './components/view-contact/view.component'
import { EditContactComponent } from './components/edit-contact/edit.component'

import { ContactsService } from './services/contacts.service'

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    EditContactComponent,
    ViewContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
