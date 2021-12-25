import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // childData!: string;
  // parentMethod(data: string){
  //   this.childData= data;

  // }


  pageTitle:string="HTTP Services in Angular";
  users:any;
  errorMessage:string="Loading.."
  toDate: Date = new Date(); 

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data)=>{
      this.users =data;
    },(err)=>{
      this.errorMessage="Some internal issue while making API call"
    })
  }

}
