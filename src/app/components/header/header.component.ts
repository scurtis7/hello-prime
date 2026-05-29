import { Component } from '@angular/core';
import { Button } from "primeng/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleDarkMode() {
    const element = document.querySelector('html');
    element.classList.toggle('my-app-dark');
  }

}
