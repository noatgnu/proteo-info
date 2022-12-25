import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-stuffs',
  templateUrl: './stuffs.component.html',
  styleUrls: ['./stuffs.component.scss']
})
export class StuffsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(data => {
      this.scrollTo(data["page"])
    })
  }

  ngOnInit(): void {
  }


  scrollTo(id: string) {
    const e = this.scrollToID(id)
  }

  scrollToID(id: string) {
    let e = document.getElementById(id)
    if (e) {
      e.scrollIntoView()

    } else {
      let observer = new MutationObserver(mutations => {
        mutations.forEach(function (mutation) {
          let nodes = Array.from(mutation.addedNodes)
          for (const node of nodes) {
            if (node.contains(document.getElementById(id))) {
              e = document.getElementById(id)
              if (e) {
                e.scrollIntoView()
              }
              observer.disconnect()
              break
            }
          }
        })
      })
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      })
    }
    return e;
  }
}
