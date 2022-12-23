import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StuffsComponent} from "./stuffs/stuffs.component";
import {AboutMeComponent} from "./about-me/about-me.component";

const routes: Routes = [
  {
    path: "", component: StuffsComponent
  },
  {
    path: "about-me", component: AboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
