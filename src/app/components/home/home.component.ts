import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { Panel } from "primeng/panel";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Panel],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
