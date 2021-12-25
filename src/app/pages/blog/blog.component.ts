import { Component, OnInit } from '@angular/core';
import { BlogDetailsService } from 'src/app/services/blog-details.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private service:BlogDetailsService) { }
  Blogtypes:any;

  ngOnInit(): void {
    this.Blogtypes= this.service.BlogDetails;
  }

}
