import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.css']
})
export class LandscapeComponent implements OnInit {
 

  landscapeimgs:any =[
    {
      src:"https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
      
      thumb:"https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",

    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFuFOFbljkwTL5RWpp4bRvc4ux0I8p3AVeMZLJdqH7U67Z30KCI31ZbtwEHHWlXjDr0aA&usqp=CAU",
      
      thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFuFOFbljkwTL5RWpp4bRvc4ux0I8p3AVeMZLJdqH7U67Z30KCI31ZbtwEHHWlXjDr0aA&usqp=CAU",
    },
    {
      src:"data:image/jpeg;base64,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",
      thumb:"data:image/jpeg;base64,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",

    },
    {
      src:"https://www.superprof.co.in/blog/wp-content/uploads/2018/02/landscape-photography-tutorials.jpg",
      thumb:"https://www.superprof.co.in/blog/wp-content/uploads/2018/02/landscape-photography-tutorials.jpg",
    },
    {
      src:"https://cdn.mos.cms.futurecdn.net/4wMKQMfTJJNehZdbbqRLbE.jpg",
      thumb:"https://cdn.mos.cms.futurecdn.net/4wMKQMfTJJNehZdbbqRLbE.jpg",

    },
    {
      src:"https://cdn2.outdoorphotographer.com/2021/05/wildflower-photography-tips-3-mt-rainier-from-the-backside-during-wildflower-season-mt-rainier-np-457x305.jpg",
      thumb:"https://cdn2.outdoorphotographer.com/2021/05/wildflower-photography-tips-3-mt-rainier-from-the-backside-during-wildflower-season-mt-rainier-np-457x305.jpg",
    },

    {
      src:"https://expertphotography.b-cdn.net/wp-content/uploads/2021/01/landscape-photography-10_reupload.jpeg",
      thumb:"https://expertphotography.b-cdn.net/wp-content/uploads/2021/01/landscape-photography-10_reupload.jpeg",
    },
    {
      src:"https://femina.wwmindia.com/content/2017/Jun/44102130_m_1497674182.jpg",
      thumb:"https://femina.wwmindia.com/content/2017/Jun/44102130_m_1497674182.jpg",
    },
    {
      src:"https://www.photographytalk.com/images/articles/2019/02/07/Simple_Landscape_Photography_Tips_With_Tons_of_Impact-2.jpg",
      thumb:"https://www.photographytalk.com/images/articles/2019/02/07/Simple_Landscape_Photography_Tips_With_Tons_of_Impact-2.jpg",
    },
    {
      src:"https://cdn2.wanderlust.co.uk/media/1002/cropped-header.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131656621890000000",
      thumb:"https://cdn2.wanderlust.co.uk/media/1002/cropped-header.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131656621890000000",
    },
    {
      src:"https://www.nfi.edu/wp-content/uploads/2021/10/Landscape-Photography_image1.jpg",
      thumb:"https://www.nfi.edu/wp-content/uploads/2021/10/Landscape-Photography_image1.jpg",

    },
    {
      src:"https://llandscapes-10674.kxcdn.com/wp-content/uploads/2018/04/landscape-photography-portfolio-5.jpg.webp",
      thumb:"https://llandscapes-10674.kxcdn.com/wp-content/uploads/2018/04/landscape-photography-portfolio-5.jpg.webp",
    },
    {
      src:"https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2xhbmRzY2FwZS1waG90b2dyYXBoeS0xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjkwfX19",
      thumb:"https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2xhbmRzY2FwZS1waG90b2dyYXBoeS0xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjkwfX19",
    },
    {
      src:"https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg",
      thumb:"https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKOGoQEqJHLk3BGn2uIypPiGBVVNDEIkEJfbI1ZBCpbeamjODut2AkovBv0mKEe5Fzgs&usqp=CAU",
      thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKOGoQEqJHLk3BGn2uIypPiGBVVNDEIkEJfbI1ZBCpbeamjODut2AkovBv0mKEe5Fzgs&usqp=CAU",
    },

    {
      src:"https://improvephotography.com/wp-content/uploads/2017/04/IMP_5994-Edit.jpg",
      thumb:"https://improvephotography.com/wp-content/uploads/2017/04/IMP_5994-Edit.jpg",
    },
    {
      src:"https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?fit=1500%2C908&ssl=1",
      thumb:"https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?fit=1500%2C908&ssl=1",
    },
    {
      src:"https://www.superprof.co.in/blog/wp-content/uploads/2018/02/landscape-photography-tutorials.jpg",
      thumb:"https://www.superprof.co.in/blog/wp-content/uploads/2018/02/landscape-photography-tutorials.jpg",
    }


                 

    
    
  ];

 


  constructor(private _lightbox:Lightbox) { }

  ngOnInit(): void {
  }

  open(index: number): void {
    console.log("===>", index)
    this._lightbox.open(this.landscapeimgs, index);    // open lightbox
    
  }

  close(): void {
    this._lightbox.close();                      // close lightbox 
    
  }

}

  