import { Component, NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { ImmediationComponrnt } from "./immediation.component";

const routes: Routes = [
{
  path: 'users',
  component: ImmediationComponrnt,
  children:[
    {
      path: ':id',
      component: ImmediationComponrnt
    }
  ] 
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ImmediatinonRoutingComponent{
constructor() {
}
}