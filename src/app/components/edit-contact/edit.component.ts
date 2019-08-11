import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from '../../interfaces/contact'; 
import { Quality } from 'src/app/interfaces/quality';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditContactComponent implements OnInit {
  
  contact:Contact;
  qualities:Quality[];
  
  constructor(
    private contactService:ContactsService,  
    private router:Router,
    private route:ActivatedRoute, 
    ) { }
    
    ngOnInit() {
      // Set Defualt values
      this.contact = {
        name: '',
        email: '',
        downloads: 0
      };
      
      this.route.params.subscribe((params)=>{
        let contactId:string = params.id;        
        this.contactService.get(contactId).subscribe((contact:Contact)=>{
          console.log('contact', contact);
          this.contact = contact;
        });
      });
    }
    
    // Update the contact details
    editContact(){    
      this.contactService.update(this.contact).subscribe((res)=>{
        console.log('Contact Updated Sucessfully'); 
        this.router.navigate(['contacts']);
      });  
    }
  
  }
  