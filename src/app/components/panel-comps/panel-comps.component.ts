import { Component, OnInit } from '@angular/core';
import { TabsModule } from "primeng/tabs";

@Component({
  selector: 'app-panel-comps',
  standalone: true,
  imports: [TabsModule],
  templateUrl: './panel-comps.component.html',
  styleUrl: './panel-comps.component.scss'
})
export class PanelCompsComponent {

}
