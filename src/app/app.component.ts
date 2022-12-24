import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proteoinformatics';

  @ViewChild("sidenav") sidenav: ElementRef| undefined

  scrollTo(id: string, sidenav: any) {
    if (sidenav) {
      sidenav.toggle()
    }
    const e = document.getElementById(id)
    if (e) {
      e.scrollIntoView()
    }

  }
}
