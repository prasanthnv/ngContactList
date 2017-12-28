import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'app';
  contactList:any[] = [];

  ngOnInit(){
   this.getData();
  }
  onSubmit(form){
    let value = form.value;
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
