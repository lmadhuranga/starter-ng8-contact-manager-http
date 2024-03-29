import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/main-page/app.component';
import { ContactsComponent } from './pages/list-contacts/list.component'
import { ViewContactComponent } from './pages/view-contact/view.component'
import { EditContactComponent } from './pages/edit-contact/edit.component'
import { AddContactComponent } from './pages/add-contact/add-contact.component'

import { ContactsService } from './services/contacts.service'; 
import { ContactNameComponent } from './components/contact-name/contact-name.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    EditContactComponent,
    ViewContactComponent, 
    ContactNameComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
