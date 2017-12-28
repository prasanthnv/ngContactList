import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  contactForm:FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    mobile : new FormControl('',Validators.required),
    telephone : new FormControl(),
    address : new FormControl()
  });
  title = 'app';
  contactList:any[] = [];

  ngOnInit(){
   this.getData();
  }
  onSubmit(){
    let value = this.contactForm.value;
    console.log(value);
    this.contactList.push(value);
    localStorage.setItem("contact_list",JSON.stringify(this.contactList));
  }


  getData(){
    if(localStorage.getItem("contact_list")){
      this.contactList = JSON.parse(localStorage.getItem("contact_list"));
    }
  }

}
