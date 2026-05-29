import { Component, OnInit } from '@angular/core';
import { Menubar } from "primeng/menubar";
import { MenuItem } from "primeng/api";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ToggleButton } from "primeng/togglebutton";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Menubar,
    FormsModule,
    ToggleButton,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;
  checked: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/home']);
        }
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
        items: [
          {
            label: 'Form Components',
            icon: 'pi pi-book',
            command: () => {
              this.router.navigate(['/footer']);
            }
          },
          {
            label: 'Button Components',
            icon: 'pi pi-objects-column',
          },
          {
            label: 'Data Components',
            icon: 'pi pi-database',
          },
          {
            label: 'Panel Components',
            icon: 'pi pi-map',
          },
          {
            label: 'Overlay Components',
            icon: 'pi pi-images',
          },
          {
            label: 'File Components',
            icon: 'pi pi-file-o',
          },
          {
            label: 'Menu Components',
            icon: 'pi pi-bars',
          },
          {
            label: 'Chart Components',
            icon: 'pi pi-chart-line',
          },
          {
            label: 'Messages Components',
            icon: 'pi pi-envelope',
          },
          {
            label: 'Media Components',
            icon: 'pi pi-image',
          },
          {
            label: 'Misc Components',
            icon: 'pi pi-question',
          },
          {
            label: 'Utilities Components',
            icon: 'pi pi-wrench',
          },
        ]
      }
    ]
  }


  toggleDarkMode() {
    const element = document.querySelector('html');
    element.classList.toggle('my-app-dark');
  }

}
