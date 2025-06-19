import { StarComponent } from './../star/star.component';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';



interface Iimg {
  id: number;
  src :string
}
@Component({
  selector: 'app-portfolio',
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imgs : Iimg [] = [
    {
      id : 0 ,
      src : "poert1.png"
    },
    {
      id : 1 ,
      src : "port2.png"
    },
    {
      id : 2 ,
      src : "port3.png"
    },
    {
      id : 3 ,
      src : "poert1.png"
    },
    {
      id : 4 ,
      src : "port2.png"
    },
    {
      id : 5 ,
      src : "port3.png"
    }
  ]


  
  @ViewChild('slid') mySlider ! :ElementRef
  loyer() : void{
    this.mySlider.nativeElement.classList.replace("d-none" , "d-flex")
    
  }
  
  colseBtn() : void{
    this.mySlider.nativeElement.classList.replace("d-flex" , "d-none")

  }

}

