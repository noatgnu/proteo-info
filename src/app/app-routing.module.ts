import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StuffsComponent} from "./stuffs/stuffs.component";
import {AboutMeComponent} from "./about-me/about-me.component";

const routes: Routes = [
  {
    path: "home", component: StuffsComponent
  },
  {
    path: "home/:page", component: StuffsComponent
  },
  {
    path: "about-me", component: AboutMeComponent
  },
  {path: "**", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
