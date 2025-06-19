import { Component, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-contact',
  imports: [StarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @ViewChildren ('el') myInput ! : QueryList<ElementRef>



}
