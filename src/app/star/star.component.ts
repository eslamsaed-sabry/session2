import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-star',
  imports: [CommonModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css',
  
})
export class StarComponent {


  isWhite : boolean = true;
  toggleBackground(){
    this.isWhite = ! this.isWhite;
  }






 



  
}
