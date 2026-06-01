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
              this.router.navigate(['/form-comps']);
            }
          },
          {
            label: 'Button Components',
            icon: 'pi pi-objects-column',
            command: () => {
              this.router.navigate(['/button-comps']);
            }
          },
          {
            label: 'Data Components',
            icon: 'pi pi-database',
            command: () => {
              this.router.navigate(['/data-comps']);
            }
          },
          {
            label: 'Panel Components',
            icon: 'pi pi-map',
            command: () => {
              this.router.navigate(['/panel-comps']);
            }
          },
          {
            label: 'Overlay Components',
            icon: 'pi pi-images',
            command: () => {
              this.router.navigate(['/overlay-comps']);
            }
          },
          {
            label: 'File Components',
            icon: 'pi pi-file-o',
            command: () => {
              this.router.navigate(['/file-comps']);
            }
          },
          {
            label: 'Menu Components',
            icon: 'pi pi-bars',
            command: () => {
              this.router.navigate(['/menu-comps']);
            }
          },
          {
            label: 'Chart Components',
            icon: 'pi pi-chart-line',
            command: () => {
              this.router.navigate(['/chart-comps']);
            }
          },
          {
            label: 'Messages Components',
            icon: 'pi pi-envelope',
            command: () => {
              this.router.navigate(['/message-comps']);
            }
          },
          {
            label: 'Media Components',
            icon: 'pi pi-image',
            command: () => {
              this.router.navigate(['/media-comps']);
            }
          },
          {
            label: 'Misc Components',
            icon: 'pi pi-question',
            command: () => {
              this.router.navigate(['/misc-comps']);
            }
          },
          {
            label: 'Utilities Components',
            icon: 'pi pi-wrench',
            command: () => {
              this.router.navigate(['/utilities-comps']);
            }
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
