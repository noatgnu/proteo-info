import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proteoinformatics';


  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(data => {
      console.log(data)
    })
  }

}
