import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/list-contacts/list.component'
import { EditContactComponent } from './components/edit-contact/edit.component'
import { ViewContactComponent } from './components/view-contact/view.component'

const routes: Routes = [
  { path:"", redirectTo:'contacts', pathMatch:'full' },
  { path: 'contacts', component:ContactsComponent},
  { path: 'edit/:id', component:EditContactComponent},
  { path: 'view/:id', component:ViewContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
