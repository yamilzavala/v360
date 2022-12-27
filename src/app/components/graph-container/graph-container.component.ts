import { Component } from '@angular/core';
import { Arrow } from '../../../app/utils/arrow'

@Component({
  selector: 'app-graph-container',
  templateUrl: './graph-container.component.html',
  styleUrls: ['./graph-container.component.scss']
})
export class GraphContainerComponent {

  arrow:any = new Arrow(190, 40);
  constructor() {    
    // document.body.appendChild(this.arrow);
  }

}


