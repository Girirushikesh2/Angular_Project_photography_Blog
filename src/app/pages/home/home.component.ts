import { Component, OnInit } from '@angular/core';
import { BlogDetailsService } from 'src/app/services/blog-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:BlogDetailsService) { }
  Blogtypes:any;


  ngOnInit(): void {
    this.Blogtypes=this.service.BlogDetails;
  }

}
