import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-wildlife',
  templateUrl: './wildlife.component.html',
  styleUrls: ['./wildlife.component.css']
})
export class WildlifeComponent implements OnInit {
  
  wildlifeimgs:any =[
    {
      src:"https://www.photoblog.com/learn/wp-content/uploads/2019/07/cheatah-photographed-in-side-lighting.jpg",
      
      thumb:"https://www.photoblog.com/learn/wp-content/uploads/2019/07/cheatah-photographed-in-side-lighting.jpg",

    },
    {
      src:"https://images.ctfassets.net/u0haasspfa6q/1tkLicIFFstpQ1zWwgYqgC/390b01ed0b0486dae3beaca7af333049/emily_mesner_wildlife_photography",
      
      thumb:"https://images.ctfassets.net/u0haasspfa6q/1tkLicIFFstpQ1zWwgYqgC/390b01ed0b0486dae3beaca7af333049/emily_mesner_wildlife_photography",
    },
    {
      src:"https://media.nationalgeographic.org/assets/photos/112/133/086f9ee9-4b97-4ba3-929d-ab0733af4a0e.jpg",
      thumb:"https://media.nationalgeographic.org/assets/photos/112/133/086f9ee9-4b97-4ba3-929d-ab0733af4a0e.jpg",

    },
    {
      src:"https://media.istockphoto.com/photos/red-deer-stag-in-misty-morning-picture-id496154506?k=20&m=496154506&s=612x612&w=0&h=KSDpOJtOwdLpNpTl1_7LykJYnme3XIjCjTHigExqetA=",
      thumb:"https://media.istockphoto.com/photos/red-deer-stag-in-misty-morning-picture-id496154506?k=20&m=496154506&s=612x612&w=0&h=KSDpOJtOwdLpNpTl1_7LykJYnme3XIjCjTHigExqetA=",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQti6btGMyc0ZpAnKsrD0GrEZHcgsxzAaURig&usqp=CAU",
      thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQti6btGMyc0ZpAnKsrD0GrEZHcgsxzAaURig&usqp=CAU",

    },
    {
      src:"https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMjc4MDE5MS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY3NTEzOTAyNX0.Op4H7DyKNqFwkoZhbDWpLVk2wU51D8FUzfRiVgSF8t4/img.jpg?width=1245&quality=85&coordinates=0%2C0%2C0%2C0&height=700",
      thumb:"https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMjc4MDE5MS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY3NTEzOTAyNX0.Op4H7DyKNqFwkoZhbDWpLVk2wU51D8FUzfRiVgSF8t4/img.jpg?width=1245&quality=85&coordinates=0%2C0%2C0%2C0&height=700",

    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsbV3pQzs2WUvNNNE1klnOXb2DjDDyn_Wvg&usqp=CAU",
      thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsbV3pQzs2WUvNNNE1klnOXb2DjDDyn_Wvg&usqp=CAU",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsfY6j-834aLJ8eX7HWARNKoDB96xsstCPg&usqp=CAU",
      thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsfY6j-834aLJ8eX7HWARNKoDB96xsstCPg&usqp=CAU",
    },
    {
      src:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/Ndutuo__Tabora__Tanzania_0_1200x768.jpeg?o4k08TSTDZ_l_LJ8YHKYweZcPHKZQe.R&size=770:433",
      thumb:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/Ndutuo__Tabora__Tanzania_0_1200x768.jpeg?o4k08TSTDZ_l_LJ8YHKYweZcPHKZQe.R&size=770:433",
    },
    {
      src:"https://files.worldwildlife.org/wwfcmsprod/images/HERO_Tiger_Grass_WEB_ONLY_thru_12_31_2017/hero_small/2b4gkcgq26_20150513_JWA7615_web.jpg",
      thumb:"https://files.worldwildlife.org/wwfcmsprod/images/HERO_Tiger_Grass_WEB_ONLY_thru_12_31_2017/hero_small/2b4gkcgq26_20150513_JWA7615_web.jpg",
    },
    {
      src:"https://cdn2.outdoorphotographer.com/2021/02/cold-wind-featured-481x305.jpg",
      thumb:"https://cdn2.outdoorphotographer.com/2021/02/cold-wind-featured-481x305.jpg",

    },
    {
      src:"https://webneel.com/daily/sites/default/files/images/daily/09-2013/19-wildlife-photography.preview.jpg",
      thumb:"https://webneel.com/daily/sites/default/files/images/daily/09-2013/19-wildlife-photography.preview.jpg",
    },
    {
      src:"https://www.fao.org/forestry/48459-0b16b910b2f2f46ed2fccb64f7f88f80f.jpg",
      thumb:"https://www.fao.org/forestry/48459-0b16b910b2f2f46ed2fccb64f7f88f80f.jpg",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRqxV7pDFTSOGuIsS1XnprFg4lSbBXTWYsQ&usqp=CAU",
      thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRqxV7pDFTSOGuIsS1XnprFg4lSbBXTWYsQ&usqp=CAU",
    },
    {
      src:"https://i.guim.co.uk/img/media/47299f45e9c762781e8d39d6fed0d979c0e0d8ec/0_0_5488_3659/master/5488.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=3060e012d5af70ebc68f708b83128fd2",
      thumb:"https://i.guim.co.uk/img/media/47299f45e9c762781e8d39d6fed0d979c0e0d8ec/0_0_5488_3659/master/5488.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=3060e012d5af70ebc68f708b83128fd2",
    }


                 

    
    
  ];

  constructor(private _lightbox:Lightbox) {

   }

  ngOnInit(): void {
  }
  
 

  open(index: number): void {
    // open lightbox
    console.log("===>", index)
    this._lightbox.open(this.wildlifeimgs, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
