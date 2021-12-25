import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  user!:User;
  constructor() { }

  ngOnInit(): void {
    this.user=new User();
  }

  submitform(form1:any){
    console.log(form1.value);
    console.log(this.user);
  }

}

class User{
  firstname!:string;
  lastname!:string;
  mobile!:number;
  message!:string;
  email!:string;
}
 