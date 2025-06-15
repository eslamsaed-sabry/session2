import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';


interface Ilink {
  id: number;
  LinkName: string;
  Linkurl: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('mobileNav') mobileNav!: ElementRef;
  navLinks: Ilink[] = [
    {
      id: 0,
      LinkName: 'About',
      Linkurl: 'about',
    },
    {
      id: 1,
      LinkName: 'contact',
      Linkurl: '/contact',
    },
    {
      id: 2,
      LinkName: 'portfolio',
      Linkurl: '/portfolio',
    },

  ];
  isOpened: boolean = false;
  menuHeight: number = 0;

  toggleMenu(): void {
    this.isOpened = !this.isOpened
    var mobNav = document.querySelector('.mobile-nav')
    if (this.isOpened) {
      mobNav?.classList.replace('d-none', 'd-flex')
      this.menuHeight = this.mobileNav.nativeElement.scrollHeight;
    } else {
      mobNav?.classList.replace('d-flex', 'd-none')
      this.menuHeight = 0;
    }
  }
  closeMenu(): void {
    var mobNav = document.querySelector('.mobile-nav')
    mobNav?.classList.replace('d-flex', 'd-none')
    this.isOpened = false;
    this.menuHeight = 0;
  }
  hoverLink(): void{
    let liHover = document.querySelector('li')
    liHover?.classList.add("hover") 
  }


}
